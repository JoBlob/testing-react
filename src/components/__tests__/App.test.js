import React from "react"
import App from "components/App";
import {shallow} from "enzyme";
import CommentBox from "components/CommentBox";
import CommentList from "components/CommentList";


let wrappedComponent;

beforeEach(() => {
    wrappedComponent = shallow(<App/>);
});


it('shows a comment box', () => {
    expect(wrappedComponent.find(CommentBox).length).toEqual(1);
});

it('shows a comment list', () => {
     expect(wrappedComponent.find(CommentList).length).toEqual(1);
 });
