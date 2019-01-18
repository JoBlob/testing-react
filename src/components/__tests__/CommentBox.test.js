import React from "react";
import CommentBox from "components/CommentBox"
import { mount } from "enzyme";
import Root from "Root";

let wrapper;

beforeEach(() => {
    wrapper = mount(
    <Root>
    < CommentBox/>
    </Root>);
})

afterEach(() => {
    wrapper.unmount();
})

it("has a text area and 2 buttons ",  () => { 
    expect(wrapper.find("textarea").length).toEqual(1);
    expect(wrapper.find("button").length).toEqual(2);
});


describe("the textarea", () => {

    beforeEach(() => {
        expect(wrapper.find("textarea").simulate("change", {
            target:{value:"new comment"}
        }));

        wrapper.update();
    });

    it("has a text area that user can write in", () => {
        expect(wrapper.find("textarea").prop("value")).toEqual("new comment");
    });

    it("clears the textarea on form submit", () => {
        expect(wrapper.find("form").simulate("submit"));
        wrapper.update();
        expect(wrapper.find("textarea").prop("value")).toEqual(" ");
    });
});