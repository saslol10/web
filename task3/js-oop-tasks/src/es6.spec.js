const assert = require('assert');
const core = require('./es6');

describe('es6', () => {
    describe('#fioToName', () => {
        it('ФИО в Имя Фамилия корректно', () => {
            assert.strictEqual(core.fioToName('Иванов Иван Иванович'), 'Иван Иванов');
        });

        it('ФИ в Имя Фамилия', () => {
            assert.strictEqual(core.fioToName('Петров Петр'), 'Петр Петров');
        });
    });

    describe('#filterUnique', () => {
        it('массив с уникальными равен сам себе', () => {
            assert.deepStrictEqual(core.filterUnique([1, 2, 3]), [1, 2, 3]);
        });

        it('массив с неуникальными отфильтрован', () => {
            assert.deepStrictEqual(core.filterUnique([1, 1, 1, 1]), [1]);
        });

        it('пустой массив', () => {
            assert.deepStrictEqual(core.filterUnique([]), []);
        });
    });

    describe('#calculateSalaryDifference', () => {
        it('считает разницу корректно', () => {
            assert.strictEqual(core.calculateSalaryDifference([1, 2, 3]), 3);
        });

        it('на пустой массив возвращается falsy значение', () => {
            assert.strictEqual(!!core.calculateSalaryDifference([]), false);
        });
    });

    describe('#Dictionary', () => {
                it('экземпляр класса создается', () => {
                    const dic = new core.Dictionary();
                    assert.strictEqual(!!dic, true);
                });

                it('Добавление слова в словарь', () => {
                    const dic = new core.Dictionary();
                    dic.push("key","value");
                    assert.strictEqual(dic.getValue("key"), "value");
                });
                it('Слово не найдено в словаре', () => {
                    const dic = new core.Dictionary();
                    assert.strictEqual(dic.getValue("key"), "Not found");
                });
                it('Удаление слова из словаря', () => {
                    const dic = new core.Dictionary();
                    dic.push("key","value");
                    assert.strictEqual(dic.getValue("key"), "value");
                    dic.pop("key");
                    assert.strictEqual(dic.getValue("key"), "Not found");
                });
                it('Изменение слова в словаре', () => {
                    const dic = new core.Dictionary();
                    dic.push("key","value");
                    assert.strictEqual(dic.getValue("key"), "value");
                    dic.setValue("key","NotValue");
                    assert.strictEqual(dic.getValue("key"), "NotValue");
                });
                it('Длина словаря', () => {
                    const dic = new core.Dictionary();
                    assert.strictEqual(dic.size(), 0);
                    dic.push("key","value");
                    dic.push("NotKey","NotValue");
                    assert.strictEqual(dic.size(), 2);

                });
                it('Проверка слова в словаре', () => {
                    const dic = new core.Dictionary();
                    dic.push("key","value");
                    assert.strictEqual(dic.hasKey("key"), true);
                    assert.strictEqual(dic.hasKey("NotKey"), false);

                });
            });
});