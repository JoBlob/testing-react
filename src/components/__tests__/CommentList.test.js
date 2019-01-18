import React from "react";
import { mount } from "enzyme";
import CommentList from "components/CommentList";
import Root from "Root";
let wrapper;

beforeEach(() => {

    const initialState = {
        comments : ["comment 1", "comment 2"]
    };

    wrapper = mount(
        <Root initialState={initialState}>
            <CommentList/> 
        </Root>
    );
});

afterEach(()=> {
    wrapper.unmount()
})

it("creates one li per elements", () => {
    expect(wrapper.find("li").length).toEqual(2);
});

it("displays the correct text", () => {
   expect(wrapper.render().text()).toContain("comment 1");
   expect(wrapper.render().text()).toContain("comment 2"); 
});