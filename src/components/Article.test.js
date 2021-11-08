import React from 'react';
import '@testing-library/jest-dom';

import userEvent from '@testing-library/user-event';
import MutationObserver from 'mutationobserver-shim';

import Article from './Article';
import { render } from 'react-dom';

test('renders component without errors', ()=> {
    const { rerender } = render(<Article article={[]}/>)
    let articleObj = screen.queryAllByTestId('article')
    expect(articleObj).toHaveLength(0)

    rerender(<Article articles={Article} />)
    articleObj = screen.queryAllByTestId('article')
    expect(articleObj).toHaveLength(2)
});

// 
test('renders headline, author from the article when passed in through props', ()=> {
    render(<Article headline = {article.headline} />)
 });

// 
test('renders "Associated Press" when no author is given', ()=> {
    render(<Article/>)
    const associatedPress = screen.queryByText(/no author is given/i)
    expect (associatedPress).toBeInTheDocument()
});

// 
test('executes handleDelete when the delete button is pressed', ()=> {
    render(<Article handleDelete = {deleteButton}/>)
});

//Task List:
//1. Complete all above tests. Create test article data when needed.