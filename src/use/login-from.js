import {useField, useForm} from "vee-validate";
import * as yup from "yup";
import {computed, watch} from "vue";
import {useStore} from "vuex";
import {useRouter} from "vue-router";

export function useLoginForm() {
    const store = useStore()
    const router = useRouter()
    const {handleSubmit, isSubmitting, submitCount} = useForm()

    const {value: email, errorMessage: eError, handleBlur: eBlur} = useField(
        'email',
        yup
            .string()
            .trim()
            .required('Пожалуйста, введите email')
            .email('Необходимо ввести корректный email')
    )

    const MIN_LENGTH = 6
    const {value: password, errorMessage: pError, handleBlur: pBlur} = useField(
        'password',
        yup
            .string()
            .trim()
            .required('Пожалуйста, введите пароль')
            .min(MIN_LENGTH, `Пароль не может быть меньше ${MIN_LENGTH} символов`)
    )

    const isTooManyAttempts = computed(() => submitCount.value >= 3)

    watch(isTooManyAttempts, val => {
        setTimeout(() => submitCount.value = 0, 2500)
    })

    const onSubmit = handleSubmit(async values => {
        console.log(values)
        await store.dispatch('auth/login', values)
        router.push('/')
    })

    return {
        email, eError, eBlur,
        password, pError, pBlur,
        onSubmit, isSubmitting, isTooManyAttempts
    }
}