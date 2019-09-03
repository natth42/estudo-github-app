import pagination from './index'

test("pagination({total: 1, activePage: 1}) should return [1]", function(){
    const params = {total: 1, activePage: 1};
    const result = [1];
    expect(pagination(params)).toEqual(result)
});

test("pagination({total: 2, activePage: 1}) should return [1, 2]", function(){
    const params = {total: 2, activePage: 1};
    const result = [1, 2];
    expect(pagination(params)).toEqual(result)
});

test("pagination({total: 5, activePage: 1}) should return [1, 2, 3, 4, 5]", function(){
    const params = {total: 5, activePage: 1};
    const result = [1, 2, 3, 4, 5];
    expect(pagination(params)).toEqual(result)
});

test("pagination({total: 6, activePage: 1}) should return [1, 2, 3, '...', 6]", function(){
    const params = {total: 6, activePage: 1};
    const result = [1, 2, 3, '...', 6];
    expect(pagination(params)).toEqual(result)
});

test("pagination({total: 6, activePage: 2}) should return [1, 2, 3, '...', 6]", function(){
    const params = {total: 6, activePage: 2};
    const result = [1, 2, 3, '...', 6];
    expect(pagination(params)).toEqual(result)
});

test("pagination({total: 6, activePage: 3}) should return [1, 2, 3, 4, 5, 6]", function(){
    const params = {total: 6, activePage: 3};
    const result = [1, 2, 3, 4, 5, 6];
    expect(pagination(params)).toEqual(result)
});

test("pagination({total: 6, activePage: 4}) should return [1, 2, 3, 4, 5, 6]", function(){
    const params = {total: 6, activePage: 4};
    const result = [1, 2, 3, 4, 5, 6];
    expect(pagination(params)).toEqual(result)
});

test("pagination({total: 6, activePage: 5}) should return [1, '...', 4, 5, 6]", function(){
    const params = {total: 6, activePage: 5};
    const result = [1, '...', 4, 5, 6];
    expect(pagination(params)).toEqual(result)
});

test("pagination({total: 6, activePage: 6}) should return [1, '...', 4, 5, 6]", function(){
    const params = {total: 6, activePage: 6};
    const result = [1, '...', 4, 5, 6];
    expect(pagination(params)).toEqual(result)
});

test("pagination({total: 7, activePage: 1}) should return [1, 2, 3, '...' , 7]", function(){
    const params = {total: 7, activePage: 1};
    const result = [1, 2, 3, '...' , 7];
    expect(pagination(params)).toEqual(result)
});

test("pagination({total: 7, activePage: 3}) should return [1, 2, 3, 4, '...' , 7]", function(){
    const params = {total: 7, activePage: 3};
    const result = [1, 2, 3, 4, '...' , 7];
    expect(pagination(params)).toEqual(result)
});

test("pagination({total: 7, activePage: 4}) should return [1, 2, 3, 4, 5, 6, 7]", function(){
    const params = {total: 7, activePage: 4};
    const result = [1, 2, 3, 4, 5, 6, 7];
    expect(pagination(params)).toEqual(result)
});

test("pagination({total: 7, activePage: 5}) should return [1, '...' , 4, 5, 6, 7]", function(){
    const params = {total: 7, activePage: 5};
    const result = [1, '...' , 4, 5, 6, 7];
    expect(pagination(params)).toEqual(result)
});

test("pagination({total: 7, activePage: 6}) should return [1, '...', 5, 6, 7]", function(){
    const params = {total: 7, activePage: 6};
    const result = [1, '...' , 5, 6, 7];
    expect(pagination(params)).toEqual(result)
});

test("pagination({total: 7, activePage: 7}) should return [1, '...', 5, 6, 7]", function(){
    const params = {total: 7, activePage: 7};
    const result = [1, '...' , 5, 6, 7];
    expect(pagination(params)).toEqual(result)
});

test("pagination({total: 15, activePage: 8}) should return [1, '...', 7, 8, 9, '...', 15]", function(){
    const params = {total: 15, activePage: 8};
    const result = [1, '...', 7, 8, 9, '...', 15];
    expect(pagination(params)).toEqual(result)
});

test("pagination({total: 15}) should return [1, 2, 3, '...', 15]", function(){
    const params = {total: 15};
    const result = [1, 2, 3, '...', 15];
    expect(pagination(params)).toEqual(result)
});

test("pagination({activePage: 1}) should return [1]", function(){
    const params = {activePage: 1};
    const result = [1];
    expect(pagination(params)).toEqual(result)
});

test("pagination() should return [1]", function(){
    const result = [1];
    expect(pagination()).toEqual(result)
});

test("pagination({total: '6', activePage: 1}) should return 'params must be a number'", function(){
    const params = {total: '6', activePage: 1};
    const result = 'params must be a number';
    try{
        expect(pagination(params)).toEqual(result)
    }catch(e){
        expect(e.message).toEqual(result)
    }
});

test("pagination({total: 6, activePage: '1'}) should return 'params must be a number'", function(){
    const params = {total: 6, activePage: '1'};
    const result = 'params must be a number';
    try{
        expect(pagination(params)).toEqual(result)
    }catch(e){
        expect(e.message).toEqual(result)
    }
});