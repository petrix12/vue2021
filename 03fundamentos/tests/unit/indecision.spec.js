import { shallowMount } from '@vue/test-utils'
import Indecision from '@/components/Indecision'

describe('Indecision Component', () => {
    let wrapper
    let clgSpy

    global.fetch = jest.fn()

    beforeEach(() => {
        wrapper = shallowMount(Indecision)
        clgSpy = jest.spyOn(console, 'log')
        jest.clearAllMocks()
    })

    test('debe de hacer match con el sanpshot', () => {
        expect( wrapper.html() ).toMatchSnapshot()
    })

    test('escribir en el input no debe de disparar nada (console.log)', async() => {
        const getAnswerSpy = jest.spyOn(wrapper.vm, 'getAnswer')
        const input = wrapper.find('input')
        await input.setValue('Hola Mundo')

        expect(clgSpy).toHaveBeenCalledTimes(1)
        /* expect(getAnswerSpy).toHaveReturnedTimes(0) */
        expect(getAnswerSpy).not.toHaveBeenCalled()
    })

    test('escribir el simbolo de "?" debe de disparar el getAnswer', async() => {
        const getAnswerSpy = jest.spyOn(wrapper.vm, 'getAnswer')
        const input = wrapper.find('input')
        await input.setValue('Hola Mundo?')

        expect(getAnswerSpy).toHaveBeenCalledTimes(1)
    })

    test('pruebas en getAnswer', () => {

    })

    test('pruebas en getAnswer - Fallo en el API', () => {

    })
})