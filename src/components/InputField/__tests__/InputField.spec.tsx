import React from 'react';
import {render, RenderResult} from '@testing-library/react';
import InputField from 'components/InputField';
import {Props} from '../types';
import {INPUT_NAMES} from "uicontainers/FormInputs/types";

let documentBody: RenderResult;

describe("<InputField />", () => {
    const props: Props = {
        id: '1',
        name: INPUT_NAMES.NAME,
        value: 'SAVE',
        type: 'text',
        required: false,
        label: INPUT_NAMES.NAME,
        defaultValue: '',
        multiline: true,
        maxRows: 3,
        width: '100%',
        onChange: (e) => {
            console.log(e.target.value)
        }
    }
    beforeEach(() => {
        documentBody = render(<InputField {...props} />)
    });
    it('matches snapshot', () => {
        const {baseElement} = documentBody;
        expect(baseElement).toMatchSnapshot();
    })

});


// jest.mock('@mui/material', () => ({
//     ...jest.requireActual('@mui/material'),
//     TextField: 'TextField',
// }));
//
//
// describe('InputField component testing', () => {
//     describe('Input Field Testing', () => {
//         it('should match Input field snapshot', () => {
//             const navigationTree = create(<InputField />).toJSON();
//             expect(navigationTree).toMatchSnapshot();
//         });
//     });
// });
