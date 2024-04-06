import sinon from "sinon";
import { expect } from "chai";

describe("Developing some feature", () => {
	it("Should start with a failing test", () => {
		expect(1).to.equal(2);
	});
});

describe("Examples of verifying mocking", () => {
	it("Has has sinon verification setup", () => {
		const spy = sinon.spy();
		spy(42);
		expect(spy).to.have.been.calledOnceWith(42);
		// Enable the chai.should() call in setup.ts to allow this syntax
		// spy.should.have.been.calledOnceWith(42)
	});
});
