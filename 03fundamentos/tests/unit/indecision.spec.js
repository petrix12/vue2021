import { shallowMount } from '@vue/test-utils'
import Indecision from '@/components/Indecision'

describe('Indecision Component', () => {
    let wrapper
    let clgSpy

    beforeEach(() => {
        wrapper = shallowMount(Indecision)
        clgSpy = jest.spyOn(console, 'log')
    })

    test('debe de hacer match con el sanpshot', () => {
        expect( wrapper.html() ).toMatchSnapshot()
    })

    test('escribir en el input no debe de disparar nada (console.log)', async() => {
        const input = wrapper.find('input')
        await input.setValue('Hola Mundo')

        expect(clgSpy).toHaveBeenCalledTimes(1)
    })

    test('escribir el simbolo de "?" debe de disparar el fetch', () => {

    })

    test('pruebas en getAnswer', () => {

    })

    test('pruebas en getAnswer - Fallo en el API', () => {

    })
})