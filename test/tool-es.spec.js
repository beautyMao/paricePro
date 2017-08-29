
describe("我的单元测试用例", function() {
    it("测试add函数加一功能", function() {
        // var a=function (x,y) {
        //     return x+y;
        // }
        // var b=a(3,5);
        // expect(b).toEqual(8);
        //expect(b).toEqual(8);
        expect(window.add(1)).toBe(3);
        expect(window.add(1)).toEqual(100);
        expect(false).toBe(true);
    });
});
