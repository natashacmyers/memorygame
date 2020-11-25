describe("Memory Game", function() {
    describe("Incrementing Levels", function(){
        it("should return 7", function(){
            let currentLevel = 6;
            expect(level(currentLevel)).toBe(7);
        });
        it("should return 5", function(){
            let currentLevel = 4;
            expect(level(currentLevel)).toBe(5);
        });
        it("should return 2", function(){
            let currentLevel = 1;
            expect(level(currentLevel)).toBe(2);
        });
        it("should return 10", function(){
            let currentLevel = 9;
            expect(level(currentLevel)).toBe(10);
        });
        it("should return 15", function(){
            let currentLevel = 14;
            expect(level(currentLevel)).toBe(15);
        });
    });
     describe("Incrementing Stings", function(){
        it("should return 3", function(){
            let currentSting = 2;
            expect(stings(currentSting)).toBe(3);
        });
        it("should return 5", function(){
            let currentSting = 4;
            expect(stings(currentSting)).toBe(5);
        });
        it("should return 20", function(){
            let currentSting = 19;
            expect(stings(currentSting)).toBe(20);
        });
        it("should return 10", function(){
            let currentSting = 9;
            expect(stings(currentSting)).toBe(10);
        });
        it("should return 17", function(){
            let currentSting = 16;
            expect(stings(currentSting)).toBe(17);
        });
    });
});

