import { shallowMount } from '@vue/test-utils'
import Counter from '@/components/Counter'

describe('Counter Component', () => {
    let wrapper
    beforeEach(() => {
        wrapper = shallowMount(Counter)
    })

    /* test('debe de hacer match con el snapshot', () => {
        const wrapper = shallowMount(Counter)
        expect( wrapper.html() ).toMatchSnapshot()
    }) */
    
    test('h2 debe de tener el valor por defecto "Contador"', () => {
        /* const h2 = wrapper.find('h2') */
        /* console.log(h2.text()) */
        /* expect( h2.text() ).toBe('Contador!') */
        expect(wrapper.find('h2').exists()).toBeTruthy()
        const h2Value = wrapper.find('h2').text()
        expect(h2Value).toBe('Contador')
    })

    test('El valor por defecto debe de ser 100 en el p', async() => {
        /* const pTags = wrapper.findAll('p') */
        const value = wrapper.find('[data-testid="counter"]').text()
        /* console.log(pTags) */
        /* expect(pTags[1].text()).toBe('100') */
        expect(value).toBe('100')

        const [increaseBtn, decreaseBtn] = wrapper.findAll('button')
        await increaseBtn.trigger('click')
    })

    test('Debe de incrementer en 1 el valor del contador', async() => {
        const [increaseBtn, decreaseBtn] = wrapper.findAll('button')

        await increaseBtn.trigger('click')
        await increaseBtn.trigger('click')
        await increaseBtn.trigger('click')
        await decreaseBtn.trigger('click')
        await decreaseBtn.trigger('click')

        const value = wrapper.find('[data-testid="counter"]').text()
        expect(value).toBe('101')
    })

    test('Debe de establecer el valor por defecto', () => {
        /* console.log(wrapper.props()) */
        /* const start = wrapper.props('start') */
        // La siguiente instrucción es equivalente a la anteriormente comentada
        const {start} = wrapper.props()
        /* console.log(start, typeof start) */

        const value = wrapper.find('[data-testid="counter"]').text()
        expect(Number(value)).toBe(start)
    })
})