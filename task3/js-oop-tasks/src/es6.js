"use strict";
// в данных задачах нужно использовать возможности es6
// ко всем заданиям можно (а местами и нужно) дописать свои тесты в файле es6.spec.js
// Можно менять параметры функций (например сделать им значения по умолчанию)

// Напишите функцию, которая принимает ФИО пользователя и возвращает
// строку формата Имя Фамилия
function fioToName(fio) {
    const keys = fio.split(' ');
    return keys[1]+" "+keys[0];
 }

// преобразуйте массив чисел так, чтобы в нем остались только
// уникальные элементы
// присмотритесь к коллекции "Set"
function filterUnique(array) {
    return Array.from(new Set(array));
}

// Задача: разница зарплат
// в функцию приходит массив из n зарплат сотрудников фирмы
// ваша задача определить, во сколько раз зарплата самого высокооплачиваемого
// сотрудника превышает зарплату самого низкооплачиваемого
function calculateSalaryDifference(array) {
        if(array.length==0) return false;
        let max = array.reduce(function(max,currentItem){return currentItem>max ? currentItem :max;},array[0]);
        let min = array.reduce(function(min,currentItem){return currentItem<min ? currentItem :min;},array[0]);
        return max/min;
}

// Реализуйте класс "словарь слов" (как толковый словарь)
// класс должен быть безопасным и работать только со словами
// присмотритесь к коллекции "Map"
// Словарь - (string, string), и все это не null и не undefined
// * покройте класс тестами
class Dictionary {
    constructor (){
        this.dict = new Map();
    }
    push(key, value){
        if(typeof key ==='string'
            && typeof value === 'string'
            && (key!==""&&key!==null&&key!==undefined)
            && (value!==""&&value!==null&&value!==undefined)){
                if(this.dict.has(key)){
                    return new Error('Already exists');
                }else{
                    this.dict.set(key,value);
                }

            }
        else{
            return new Error('Error');
        }

    }
    getValue(key){
        if(typeof key ==="string"&&key!==""){
            if(this.dict.has(key)){
                return this.dict.get(key);
            }else{
                return "Not found";
            }
        }else{
            return new Error('Error');
        }
    }
    pop(key){
        if(typeof key ==="string"&&key!==""){

            if(this.dict.has(key)){
                return this.dict.delete(key);
            }else{
                return "Not found";
            }
        }else{
            return new Error('Error');
        }
    }
    setValue(key,value){
        this.pop(key);
        this.push(key,value);
    }
    hasKey(key){
        return this.dict.has(key);
    }
    size(){
        return this.dict.size;
    }
}

module.exports = {
    fioToName,
    filterUnique,
    Dictionary,
    calculateSalaryDifference
};
