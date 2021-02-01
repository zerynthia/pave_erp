const state = {
  additionalSites: [
    { id: 1, cityName: 'Самара', employees: 0, edited: false },
    { id: 2, cityName: 'Казань', employees: 0, edited: false },
    { id: 3, cityName: 'Москва', employees: 0, edited: false },
    { id: 4, cityName: 'Ульяновск', employees: 0, edited: false },
    { id: 5, cityName: 'Набережные Челны', employees: 0, edited: false },
    { id: 6, cityName: 'Красноярск', employees: 0, edited: false },
    { id: 7, cityName: 'Оренбург', employees: 0, edited: false },
    { id: 8, cityName: 'Уфа', employees: 0, edited: false }
  ],

  additionalEmployees: [
    { id: 1, email: 'admin@admin.com', password: 'admin2021best', name: 'Иван', surname: 'Захаров', patronymic: 'Михайлович', sex: 'Мужской', homePhone: '', mobilePhone: '+7 (354) 010-01-11', city: 'Москва', duty: 'Системный администратор', access: 'admin', edited: false, auth: '' },
    { id: 2, email: 'employee@employee.com', password: 'employee2021best', name: 'Олег', surname: 'Миров', patronymic: 'Артёмович', sex: 'Мужской', homePhone: '', mobilePhone: '+7 (354) 198-15-44', city: 'Ульяновск', duty: 'Сотрудник', access: 'employee', edited: false, auth: '' }
  ],

  additionalWorkers: [
    { id: 1, name: 'Артём', surname: 'Горбачев', patronymic: 'Михайлович', city: 'Ульяновск', accountNumber: 'test1', mobilePhone: '+7 (354) 823-12-55', nameCard: 'Артём', surnameCard: 'Горбачев', patronymicCard: 'Михайлович', accountNumberCard: '40817810570000133476', bank: 'СберБанк', age: '41', birthday: '1980-06-21', sex: 'Мужской', nationality: '', passportID: '192499', passportDate: '2018-01-19', passportIssued: '', registration: 'Ульяновск', address: 'Ульяновск', homePhone: '', number: '3462325235235', medicalBook: '2023-03-31', education: '', university: '', previousWork: '', reasonComing: '', professions: 'Электрик', nightShift: 'Нет', checkMVD: 'Да', dateInterview: '', uniform: '', fired: 'Нет', edited: false, UploadImage: 'https://res.cloudinary.com/db6qzfvbw/image/upload/v1612098077/profile_1_btkhxj.svg', UploadPassport: 'https://res.cloudinary.com/db6qzfvbw/image/upload/v1612098616/passport_otoach.png', editedCount: '1' },
    { id: 2, name: 'Максим', surname: 'Королев', patronymic: 'Дмитриевич', city: 'Ульяновск', accountNumber: 'test2', mobilePhone: '+7 (275) 900-82-40', nameCard: 'Максим', surnameCard: 'Королев', patronymicCard: 'Дмитриевич', accountNumberCard: '40847813570000123456', bank: 'СберБанк', age: '51', birthday: '1970-01-31', sex: 'Мужской', nationality: '', passportID: '38488', passportDate: '2020-07-23', passportIssued: '', registration: 'Ульяновск', address: 'Ульяновск', homePhone: '', number: '3462325235235', medicalBook: '2022-01-31', education: '', university: '', previousWork: '', reasonComing: '', professions: 'Повар', nightShift: 'Нет', checkMVD: 'Да', dateInterview: '', uniform: '', fired: 'Нет', edited: false, UploadImage: 'https://res.cloudinary.com/db6qzfvbw/image/upload/v1612098077/profile_1_btkhxj.svg', UploadPassport: 'https://res.cloudinary.com/db6qzfvbw/image/upload/v1612098616/passport_otoach.png', editedCount: '11' },
    { id: 3, name: 'Юрий', surname: 'Гаврилов', patronymic: 'Семёнович', city: 'Ульяновск', accountNumber: 'test3', mobilePhone: '+7 (792) 946-90-57', nameCard: 'Юрий', surnameCard: 'Гаврилов', patronymicCard: 'Семёнович', accountNumberCard: '40867810470300123446', bank: 'Тинькофф Банк', age: '36', birthday: '1985-03-11', sex: 'Мужской', nationality: '', passportID: '27273', passportDate: '2020-06-15', passportIssued: '', registration: 'Ульяновск', address: 'Ульяновск', homePhone: '', number: '3462325235235', medicalBook: '2021-03-31', education: '', university: '', previousWork: '', reasonComing: '', professions: 'Электрик', nightShift: 'Да', checkMVD: 'Да', dateInterview: '', uniform: '', fired: 'Нет', edited: false, UploadImage: 'https://res.cloudinary.com/db6qzfvbw/image/upload/v1612098077/profile_1_btkhxj.svg', UploadPassport: 'https://res.cloudinary.com/db6qzfvbw/image/upload/v1612098616/passport_otoach.png', editedCount: '42' },
    { id: 4, name: 'Илья', surname: 'Белов', patronymic: 'Михайлович', city: 'Ульяновск', accountNumber: 'test4', mobilePhone: '+7 (354) 893-02-14', nameCard: 'Илья', surnameCard: 'Белов', patronymicCard: 'Михайлович', accountNumberCard: '40817810570000423456', bank: 'СберБанк', age: '21', birthday: '2000-03-31', sex: 'Мужской', nationality: '', passportID: '64681', passportDate: '2017-07-09', passportIssued: '', registration: 'Ульяновск', address: 'Ульяновск', homePhone: '', number: '3462325235235', medicalBook: '2027-03-31', education: '', university: '', previousWork: '', reasonComing: '', professions: 'Слесарь', nightShift: 'Нет', checkMVD: 'Да', dateInterview: '', uniform: '', fired: 'Нет', edited: false, UploadImage: 'https://res.cloudinary.com/db6qzfvbw/image/upload/v1612098077/profile_1_btkhxj.svg', UploadPassport: 'https://res.cloudinary.com/db6qzfvbw/image/upload/v1612098616/passport_otoach.png', editedCount: '15' },
    { id: 5, name: 'Алиса', surname: 'Абрамова', patronymic: 'Макаровна', city: 'Ульяновск', accountNumber: 'test5', mobilePhone: '+7 (648) 129-15-01', nameCard: 'Алиса', surnameCard: 'Абрамова', patronymicCard: 'Макаровна', accountNumberCard: '40817810570400123496', bank: 'СберБанк', age: '20', birthday: '2001-03-01', sex: 'Женский', nationality: '', passportID: '25350', passportDate: '2020-06-16', passportIssued: '', registration: 'Ульяновск', address: 'Ульяновск', homePhone: '', number: '3462325235235', medicalBook: '', education: '', university: '', previousWork: '', reasonComing: '', professions: 'Программист', nightShift: 'Да', checkMVD: 'Нет', dateInterview: '', uniform: '', fired: 'Нет', edited: false, UploadImage: 'https://res.cloudinary.com/db6qzfvbw/image/upload/v1612097737/profile_yq8j2w.svg', UploadPassport: 'https://res.cloudinary.com/db6qzfvbw/image/upload/v1612098616/passport_otoach.png', editedCount: '16' },
    { id: 6, name: 'Максим', surname: 'Попов', patronymic: 'Сергеевич', city: 'Ульяновск', accountNumber: 'test6', mobilePhone: '+7 (354) 123-21-83', nameCard: 'Максим', surnameCard: 'Попов', patronymicCard: 'Сергеевич', accountNumberCard: '40817510540003123456', bank: 'СберБанк', age: '22', birthday: '1999-06-01', sex: 'Мужской', nationality: '', passportID: '145554', passportDate: '2020-06-09', passportIssued: '', registration: 'Ульяновск', address: 'Ульяновск  ', homePhone: '', number: '3462325235235', medicalBook: '2022-03-31', education: '', university: '', previousWork: '', reasonComing: '', professions: 'Кассир', nightShift: 'Нет', checkMVD: 'Да', dateInterview: '', uniform: '', fired: 'Нет', edited: false, UploadImage: 'https://res.cloudinary.com/db6qzfvbw/image/upload/v1612098077/profile_1_btkhxj.svg', UploadPassport: 'https://res.cloudinary.com/db6qzfvbw/image/upload/v1612098616/passport_otoach.png', editedCount: '35' },
    { id: 7, name: 'Майя', surname: 'Дубровина', patronymic: 'Тимуровна', city: 'Самара', accountNumber: 'test7', mobilePhone: '+7 (981) 979-12-25', nameCard: 'Майя', surnameCard: 'Дубровина', patronymicCard: 'Тимуровна', accountNumberCard: '40817870570040123459', bank: 'Альфа-Банк', age: '26', birthday: '1995-03-31', sex: 'Женский', nationality: '', passportID: '32328', passportDate: '2020-01-09', passportIssued: '', registration: 'Самара', address: 'Самара', homePhone: '', number: '3462325235235', medicalBook: '2028-05-31', education: '', university: '', previousWork: '', reasonComing: '', professions: 'Кассир', nightShift: 'Нет', checkMVD: 'Да', dateInterview: '', uniform: '', fired: 'Нет', edited: false, UploadImage: 'https://res.cloudinary.com/db6qzfvbw/image/upload/v1612097737/profile_yq8j2w.svg', UploadPassport: 'https://res.cloudinary.com/db6qzfvbw/image/upload/v1612098616/passport_otoach.png', editedCount: '8' },
    { id: 8, name: 'Степан', surname: 'Азинов', patronymic: 'Михайлович', city: 'Самара', accountNumber: 'test8', mobilePhone: '+7 (986) 979-61-33', nameCard: 'Степан', surnameCard: 'Азинов', patronymicCard: 'Михайлович', accountNumberCard: '45817810570400123456', bank: 'Альфа-Банк', age: '28', birthday: '1993-07-01', sex: 'Мужской', nationality: '', passportID: '72342', passportDate: '2019-07-22', passportIssued: '', registration: 'Самара', address: 'Самара', homePhone: '', number: '3462325235235', medicalBook: '2029-01-31', education: '', university: '', previousWork: '', reasonComing: '', professions: 'Монтажник', nightShift: 'Нет', checkMVD: 'Да', dateInterview: '', uniform: '', fired: 'Нет', edited: false, UploadImage: 'https://res.cloudinary.com/db6qzfvbw/image/upload/v1612098077/profile_1_btkhxj.svg', UploadPassport: 'https://res.cloudinary.com/db6qzfvbw/image/upload/v1612098616/passport_otoach.png', editedCount: '9' },
    { id: 9, name: 'Ольга', surname: 'Любровина', patronymic: 'Тимуровна', city: 'Казань', accountNumber: 'test9', mobilePhone: '+7 (980) 970-60-81', nameCard: 'Ольга', surnameCard: 'Любровина', patronymicCard: 'Тимуровна', accountNumberCard: '40817810370007123416', bank: 'СберБанк', age: '23', birthday: '1988-12-02', sex: 'Женский', nationality: '', passportID: '23411', passportDate: '2018-06-21', passportIssued: '', registration: 'Казань', address: 'Казань', homePhone: '', number: '3462325235235', medicalBook: '2021-03-31', education: '', university: '', previousWork: '', reasonComing: '', professions: 'Слесарь', nightShift: 'Нет', checkMVD: 'Да', dateInterview: '', uniform: '', fired: 'Нет', edited: false, UploadImage: 'https://res.cloudinary.com/db6qzfvbw/image/upload/v1612097737/profile_yq8j2w.svg', UploadPassport: 'https://res.cloudinary.com/db6qzfvbw/image/upload/v1612098616/passport_otoach.png', editedCount: '1' },
    { id: 10, name: 'Олег', surname: 'Вишневский', patronymic: 'Арсенович', city: 'Москва', accountNumber: 'test10', mobilePhone: '+7 (995) 975-61-82', nameCard: 'Олег', surnameCard: 'Вишневский', patronymicCard: 'Арсенович', accountNumberCard: '40837810570400123426', bank: 'Тинькофф Банк', age: '31', birthday: '1990-03-09', sex: 'Мужской', nationality: '', passportID: '20140', passportDate: '2020-01-31', passportIssued: '', registration: 'Москва', address: 'Москва', homePhone: '', number: '3462325235235', medicalBook: '2023-01-01', education: '', university: '', previousWork: '', reasonComing: '', professions: 'Кассир', nightShift: 'Да', checkMVD: 'Да', dateInterview: '', uniform: '', fired: 'Да', edited: false, UploadImage: 'https://res.cloudinary.com/db6qzfvbw/image/upload/v1612098077/profile_1_btkhxj.svg', UploadPassport: 'https://res.cloudinary.com/db6qzfvbw/image/upload/v1612098616/passport_otoach.png', editedCount: '38' }
  ]
}

export default {
  state
}
