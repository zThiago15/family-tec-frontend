import '@testing-library/jest-dom';
import { describe, it, expect } from 'vitest';
import { fireEvent, render } from '@testing-library/react';

import Feedback from '../../components/Feedback';

describe('Feedback component', () => {
    it('renders the feedback form after clicking it', async () => {
 
        const { getByText, getByPlaceholderText } = render(<Feedback />)

        const toggleFormBtn = getByText('Já é nosso cliente? Faça uma avaliação')

        fireEvent.click(toggleFormBtn)
        
        expect(getByPlaceholderText('Nome completo*')).toBeInTheDocument()
        expect(getByPlaceholderText('Feedback*')).toBeInTheDocument()
        expect(getByPlaceholderText('Nome completo*')).toBeInTheDocument()
        expect(getByText('Enviar')).toBeInTheDocument()
    });
})

