import { shallowMount } from '@vue/test-utils'
import Counter from '@/components/Counter'

describe('Counter Component', () => {
    /* test('debe de hacer match con el snapshot', () => {
        const wrapper = shallowMount(Counter)
        expect( wrapper.html() ).toMatchSnapshot()
    }) */
    
    test('h2 debe de tener el valor por defecto "Contador"', () => {
        const wrapper = shallowMount(Counter)
        /* const h2 = wrapper.find('h2') */
        /* console.log(h2.text()) */
        /* expect( h2.text() ).toBe('Contador!') */
        expect(wrapper.find('h2').exists()).toBeTruthy()
        const h2Value = wrapper.find('h2').text()
        expect(h2Value).toBe('Contador')
    })
})