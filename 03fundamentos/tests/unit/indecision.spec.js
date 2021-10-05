import { shallowMount } from '@vue/test-utils'
import Indecision from '@/components/Indecision'

describe('Indecision Component', () => {
    let wrapper
    beforeEach(() => {
        wrapper = shallowMount(Indecision)
    })

    test('Debe de hacer match con el sanpshot', () => {
        expect( wrapper.html() ).toMatchSnapshot()
    })
})