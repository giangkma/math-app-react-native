import backgroundImageClass1 from "../../assets/class1.jpg";
import backgroundImageClass2 from "../../assets/class2.jpg";
import backgroundImageClass3 from "../../assets/class3.jpg";
import backgroundImageClass4 from "../../assets/class4.jpg";
import backgroundImageClass5 from "../../assets/class5.jpg";
import backgroundImageClass6 from "../../assets/class6.jpg";
import backgroundImageClass7 from "../../assets/class7.jpg";
import backgroundImageClass8 from "../../assets/class8.jpg";
import backgroundImageClass9 from "../../assets/class9.jpg";
import backgroundImageClass10 from "../../assets/class10.jpg";
import backgroundImageClass11 from "../../assets/class11.jpg";
import backgroundImageClass12 from "../../assets/class12.jpg";

export const dataClassHomepage = [
    {
        title: "Khối tiểu học",
        arrayClass: [
            {
                title: "LỚP 1",
                background: backgroundImageClass1,
                key: 1,
            },
            {
                title: "LỚP 2",
                background: backgroundImageClass2,
                key: 2,
            },
            {
                title: "LỚP 3",
                background: backgroundImageClass3,
                key: 3,
            },
            {
                title: "LỚP 4",
                background: backgroundImageClass4,
                key: 4,
            },
            {
                title: "LỚP 5",
                background: backgroundImageClass5,
                key: 5,
            },
        ],
    },
    {
        title: "Khối trung học cơ sở",
        arrayClass: [
            {
                title: "LỚP 6",
                background: backgroundImageClass6,
                key: 6,
            },
            {
                title: "LỚP 7",
                background: backgroundImageClass7,
                key: 7,
            },
            {
                title: "LỚP 8",
                background: backgroundImageClass8,
                key: 8,
            },
            {
                title: "LỚP 9",
                background: backgroundImageClass9,
                key: 9,
            },
        ],
    },
    {
        title: "Khối trung học phổ thông",
        arrayClass: [
            {
                title: "LỚP 10",
                background: backgroundImageClass10,
                key: 10,
            },
            {
                title: "LỚP 11",
                background: backgroundImageClass11,
                key: 11,
            },
            {
                title: "LỚP 12",
                background: backgroundImageClass12,
                key: 12,
            },
        ],
    },
];

export const buttonsAnswer = [
    {
        key: "A",
    },
    {
        key: "B",
    },
    {
        key: "C",
    },
    {
        key: "D",
    },
];

export const arrayDummy = [1, 2, 3, 4, 5];

export const question = [
    //"class" One
    { id: "", class: 1, question: "1 + 5 =", correctAnswer: 6 },
    { id: "", class: 1, question: "2 + 3 =", correctAnswer: 5 },
    { id: "", class: 1, question: "1 + 3 =", correctAnswer: 4 },
    { id: "2", class: 1, question: "2 + 6 =", correctAnswer: 8 },
    { id: "3", class: 1, question: "1 + 4 =", correctAnswer: 5 },
    { id: "4", class: 1, question: "2 + 8 =", correctAnswer: 10 },
    { id: "5", class: 1, question: "3 + 6 =", correctAnswer: 9 },
    {
        id: "",
        class: 1,
        question: "Tìm số bé nhất trong các số sau :8, 4, 10, 12 , 9",
        correctAnswer: 4,
    },
    {
        id: "",
        class: 1,
        question: "Tìm số bé nhất trong các số sau :11, 18, 19, 8",
        correctAnswer: 8,
    },
    {
        id: "",
        class: 1,
        question: "Tìm số bé nhất trong các số sau :16, 13, 14, 20",
        correctAnswer: 13,
    },
    {
        id: "",
        class: 1,
        question: "Tìm số lớn nhất trong các số sau :16, 13, 14, 20",
        correctAnswer: 20,
    },
    {
        id: "",
        class: 1,
        question: "Tìm số lớn nhất trong các số sau :11, 18, 19, 8",
        correctAnswer: 19,
    },
    { id: "", class: 1, question: "12 + 3 ", correctAnswer: 15 },
    {
        id: "",
        class: 1,
        question:
            "Hoa có 16 cái kẹo, Hà cho Hoa thêm 3 cái kẹo nữa. Hỏi Hoa có tất cả bao nhiêu cái kẹo?",
        correctAnswer: 19,
    },
    {
        id: "",
        class: 1,
        question:
            "Tú có 1 chục quyển vở, Tú được thưởng 5 quyển vở nữa. Hỏi tú có tất cả bao nhiêu quyển vở?",
        correctAnswer: 15,
    },
    {
        id: "",
        class: 1,
        question:
            "Huệ có 2 chục bút chì, mẹ mua thêm cho Huệ 5 bút chì nữa. Hỏi Huệ có tất cả bao nhiêu bút chì?",
        correctAnswer: 25,
    },
    {
        id: "",
        class: 1,
        question:
            "Tổ Một làm được 20 lá cờ, tổ Hai làm được 1 chục lá cờ. Hỏi cả hai tổ làm được tất cả bao nhiêu lá cờ?",
        correctAnswer: 30,
    },
    { id: "", class: 1, question: "60cm + 20cm = ....cm", correctAnswer: 80 },
    {
        id: "",
        class: 1,
        question: "Đặt tính rồi tính: 20 + 40",
        correctAnswer: 60,
    },
    {
        id: "",
        class: 1,
        question: "Đặt tính rồi tính: 87 – 59",
        correctAnswer: 28,
    },
    {
        id: "",
        class: 1,
        question: "Đặt tính rồi tính: 76 + 38",
        correctAnswer: 114,
    },
    {
        id: "",
        class: 1,
        question: "Tính nhẩm :58 – 23 + 34 =...... ",
        correctAnswer: 69,
    },
    {
        id: "",
        class: 1,
        question: "Tính nhẩm :4cm + 15cm – 6cm = ....... ",
        correctAnswer: 13,
    },
    {
        id: "",
        class: 1,
        question: "Tính nhẩm :18cm – 5cm + 6cm =........ ",
        correctAnswer: 19,
    },
    {
        id: "",
        class: 1,
        question: "Tính nhẩm :12cm + 7cm – 5cm = ....... ",
        correctAnswer: 14,
    },
    {
        id: "",
        class: 1,
        question: "Tính nhẩm :37cm + 12cm – 32cm =........ ",
        correctAnswer: 17,
    },
    {
        id: "",
        class: 1,
        question:
            "Đoạn thẳng AB dài 10 cm, đoạn thẳng BC dài 19 cm. Hỏi cả hai đoạn thẳng dài bao nhiêu xăng-ti-mét?",
        correctAnswer: 29,
    },
    {
        id: "",
        class: 1,
        question:
            " Một thanh gỗ dài 85cm, Lan cắt đi 25cm. Hỏi thanh gỗ còn lại dài bao nhiêu xăng ti mét?",
        correctAnswer: 60,
    },

    //"class" Two
    {
        id: "",
        class: 2,
        question: "Tìm một số, biết số đó cộng với 12 thì bằng 15 cộng 27?",
        correctAnswer: 30,
    },
    {
        id: "",
        class: 2,
        question: "Tìm một số, biết 95 trừ đi số đó thì bằng 39 trừ đi 22?",
        correctAnswer: 78,
    },
    {
        id: "",
        class: 2,
        question:
            "Hồng có nhiều hơn Hà 10 viên bi, nếu Hồng cho Hà 4 viên bi thì Hồng còn nhiều hơn Hà mấy viên bi?",
        correctAnswer: 2,
    },
    {
        id: "",
        class: 2,
        question: "Tìm y : 36 + 65 = y + 22 ",
        correctAnswer: 79,
    },
    {
        id: "",
        class: 2,
        question: "Tìm y :100 - 55 = y - 13",
        correctAnswer: 58,
    },
    {
        id: "",
        class: 2,
        question: "Tìm y :121 - 35 = y - 23",
        correctAnswer: 109,
    },
    {
        id: "",
        class: 2,
        question: "Tổng lớn nhất của hai số có một chữ số là bao nhiêu?",
        correctAnswer: 18,
    },
    {
        id: "",
        class: 2,
        question:
            "Tìm một số, biết tổng của số đó với 45 bằng số bé nhất có ba chữ số?",
        correctAnswer: 55,
    },
    {
        id: "",
        class: 2,
        question: "Tìm một số, biết hiệu của 89 với số đó bằng 15?",
        correctAnswer: 74,
    },
    {
        id: "",
        class: 2,
        question:
            "Một ô tô chở khách dừng tại bến đỗ. Có 8 người xuống xe và 5 người lên xe. Xe tiếp tục chạy, lúc này trên xe có tất cả 50 hành khách. Hỏi trước khi xe dừng lại bến đỗ đó, trên xe có bao nhiêu hành khách?",
        correctAnswer: 53,
    },
    {
        id: "",
        class: 2,
        question:
            "Gói kẹo chanh và gói kẹo dừa có tất cả 258 cái kẹo. Riêng gói kẹo chanh có 118 cái. Hỏi: Gói kẹo dừa có bao nhiêu cái kẹo?",
        correctAnswer: 140,
    },
    {
        id: "",
        class: 2,
        question:
            "Hai đội bóng bàn, mỗi đội có 3 người chơi đấu bóng bàn với nhau. Mỗi người của đội này đều đấu một ván với mỗi người của đội kia. Hỏi có tất cả bao nhiêu ván đấu?",
        correctAnswer: 9,
    },
    {
        id: "",
        class: 2,
        question:
            "Con ngỗng cân nặng 11kg. Con ngỗng cân nặng hơn con vịt 8 kg. Con gà cân nặng ít hơn con vịt 2 kg. Hỏi con ngỗng cân nặng hơn con gà mấy kg?",
        correctAnswer: 10,
    },
    {
        id: "",
        class: 2,
        question:
            "Trên bãi cỏ có 15 con bò. Số bò nhiều hơn số trâu là 10 con. Số cừu bằng số bò và trâu cộng lại. Hỏi trên bãi cỏ có Tất cả có bao nhiêu con?",
        correctAnswer: 40,
    },
    {
        id: "",
        class: 2,
        question:
            "Một thúng đựng 56 quả vừa trứng gà vừa trứng vịt. Mẹ đã bán 25 quả trứng gà, trong thúng còn 12 quả trứng gà nữa. Hỏi lúc đầu trong thúng có bao nhiêu quả trứng vịt?",
        correctAnswer: 19,
    },
    {
        id: "",
        class: 2,
        question:
            "Năm nay con 8 tuổi, mẹ 32 tuổi. Hỏi trước đây 2 năm tuổi mẹ cộng với tuổi con là bao nhiêu?",
        correctAnswer: 36,
    },
    {
        id: "",
        class: 2,
        question:
            "Hiện nay Mai 7 tuổi, Hoa 10 tuổi, Hồng 9 tuổi. Đến khi Bạn Mai bằng tuổi bạn Hồng hiện nay thì tổng số tuổi của ba bạn là bao nhiêu?",
        correctAnswer: 32,
    },
    {
        id: "",
        class: 2,
        question: "Đặt tính rồi tính :36 + 23",
        correctAnswer: 59,
    },
    {
        id: "",
        class: 2,
        question: "Đặt tính rồi tính :100 – 46 ",
        correctAnswer: 54,
    },
    {
        id: "",
        class: 2,
        question: "Tìm x :28 : x = 65 – 58  ",
        correctAnswer: 4,
    },
    { id: "", class: 2, question: "Tìm x :x – 34 = 29 ", correctAnswer: 63 },
    { id: "", class: 2, question: "Tìm x :73 – x = 45", correctAnswer: 28 },
    {
        id: "",
        class: 2,
        question:
            "Bình có nhiều hơn An 11 viên bi. Nếu Bình cho An 6 viên bi thì Bình ít hơn An mấy viên bi?",
        correctAnswer: 1,
    },
    {
        id: "",
        class: 2,
        question:
            "Mai có nhiều hơn Nam 12 viên bi. Hỏi Mai phải cho Nam bao nhiêu viên bi để 2 bạn có số bi bằng nhau?",
        correctAnswer: 6,
    },
    {
        id: "",
        class: 2,
        question:
            "Linh có nhiều hơn Hà 13 viên bi. Nếu Linh cho Hà 5 viên bi thì số bi Linh còn nhiều hơn Hà là bao nhiêu viên?",
        correctAnswer: 3,
    },
    {
        id: "",
        class: 2,
        question:
            "Lan có nhiều hơn Huệ 12 quyển vở. Hồng cho Huệ 4 quyển vở. Hỏi Lan còn nhiều hơn Huệ bao nhiêu quyển vở.",
        correctAnswer: 8,
    },
    {
        id: "",
        class: 2,
        question:
            "An có nhiều hơn Dũng 1 số viên bi. Nếu An cho Dũng 8 viên bi thì hai bạn có số bi bằng nhau. Hỏi An có nhiều Dũng bao nhiêu viên bi?",
        correctAnswer: 16,
    },
    {
        id: "",
        class: 2,
        question:
            "An có 1 số hộp bi, mỗi hộp 5 viên. An mua thêm 30 bi nữa. Hỏi An có thêm được bao nhiêu hộp bi?",
        correctAnswer: 6,
    },

    //"class" Three
    {
        id: "",
        class: 3,
        question:
            "Lớp 2A có 34 học sinh, lớp 2B có 29 học sinh. Tính tổng số học sinh của hai lớp 2A và 2B.",
        correctAnswer: 63,
    },
    {
        id: "",
        class: 3,
        question:
            "An có 29 cái kẹo, mẹ cho An 5 cái kẹo. Hỏi lúc này An có tất cả bao nhiêu cái kẹo?",
        correctAnswer: 34,
    },
    {
        id: "",
        class: 3,
        question: "Thực hiện phép tính sau : 34 + 81/9 - 39*14 = ?",
        correctAnswer: -503,
    },
    {
        id: "",
        class: 3,
        question: "Thực hiện phép nhân 333*13 = ? ",
        correctAnswer: 4329,
    },
    {
        id: "",
        class: 3,
        question:
            "Hai ngăn sách có tổng cộng 84 quyển. Nếu lấy 4 quyển sách của ngăn thứ nhất chuyển sang ngăn thứ hai thì số quyển sách của hai ngăn bằng nhau. Hỏi thực sự ngăn thứ nhất có bao nhiêu quyển sách?",
        correctAnswer: 46,
    },
    //"class" Four
    // "class" Five
    {
        id: "",
        class: 5,
        question:
            "Có hai hộp bi, hộp thứ nhất nếu bớt ra 4 viên bi thì sẽ có số bi kém hộp thứ hai 2 lần. Hỏi hộp thứ nhất ít hơn hộp thứ hai bao nhiêu viên bi? Biết hộp thứ hai có 28 viên bi?",
        correctAnswer: 10,
    },
    {
        id: "",
        class: 5,
        question:
            " Hồng có 28 quyển sách, số sách của Hồng so với số sách của Lan thì kém 3 lần. Hỏi Lan phải chuyển cho Hồng bao nhiêu quyển sách để số sách của Lan còn gấp 2 lần số sách của Hồng?",
        correctAnswer: 4,
    },
    {
        id: "",
        class: 5,
        question:
            "Có hai thùng dầu, thùng thứ nhất chứa 48 lít dầu, thùng thứ hai nếu có thêm 4 lít dầu thì số dầu ở thùng thứ hai so với thùng thứ nhất sẽ kém 2 lần. Hỏi phải cuyển từ thùng thứ nhất sang thùng thứ hai bao nhiêu lít dầu để hai thùng có số lít dầu bằng nhau?",
        correctAnswer: 14,
    },
    {
        id: "",
        class: 5,
        question:
            "Có hai bao đường, nếu lấy ở bao thứ nhất bớt 3kg thì bao thứ nhất còn nhiều hơn bao thứ hai 24kg và còn nhiều gấp 3 lần bao thứ hai. Hỏi hai bao đường có tất cả bao nhiêu ki-lô-gam?",
        correctAnswer: 51,
    },
    {
        id: "",
        class: 5,
        question:
            "Có hai tấm vải, một tấm màu xanh, một tấm màu đỏ, tấm vải xanh dài gấp 3 lần tấm vải đỏ. Cửa hàng đã bán hét 25m vải xanh và 7m vải đỏ thì số mét vải còn lại của hai tấm vải bằng nhau. Hỏi lúc chưa bán tấm vải đỏ dài bao nhiêu mét?",
        correctAnswer: 9,
    },
    {
        id: "",
        class: 5,
        question:
            "Có hai bao gạo, bao thứ nhất nặng 64kg. Biết rằng nếu bao thứ nhất có thêm 8kg gạo thì số gạo của bao thứ nhất so với bao thứ hai sẽ gấp 3 lần. Hỏi bao thứ nhất nhiều hơn bao thứ hai bao nhiêu ki-lô-gam gạo?",
        correctAnswer: 40,
    },
    {
        id: "",
        class: 5,
        question:
            "Dũng có một hộp 20 viên bi gồm 3 loại bi: bi xanh, bi đỏ và bi vàng. Biết số bi xanh gấp 6 lần số bi đỏ và gấp 2 lần số bi vàng. Hỏi bi đỏ có bao nhiêu viên bi?",
        correctAnswer: 2,
    },
    {
        id: "",
        class: 5,
        question: "3(4 – x) – 2(x- 1) = x + 20",
        correctAnswer: -1,
    },
    { id: "", class: 5, question: "3(x – 2) + 2x = 10", correctAnswer: 16 },
    {
        id: "",
        class: 5,
        question: "3x - 7(2x - 1) - 4x = 8(3x -5) + 4",
        correctAnswer: 43,
    },
    {
        id: "",
        class: 5,
        question: "4(2x + 7) – 3(3x – 2) = 24 ",
        correctAnswer: 10,
    },
    { id: "", class: 5, question: "2(x-1) + 3(x-2) = x-4 ", correctAnswer: 1 },
    { id: "", class: 4, question: "14 + 4x = 3x + 20", correctAnswer: 6 },
    {
        id: "",
        class: 5,
        question: "3x + 16(3-2x) + 18 = 4 - 2x + 4( 3x+2 )",
        correctAnswer: 18,
    },
    {
        id: "",
        class: 4,
        question: "5x-4(3x+2)-4x = 10-8(3-4x)",
        correctAnswer: 6,
    },
    { id: "", class: 5, question: "4x+8-3(2x-4) = 10x+6", correctAnswer: 7 },
    { id: "", class: 5, question: "3x-8+2(4x-5) = 7(2x-2)", correctAnswer: -4 },
    { id: "", class: 5, question: "x+8-2(3x-4)-5 = 3x+7", correctAnswer: 1 },
    {
        id: "",
        class: 5,
        question: "4x-10+3(3x-5)-2 = 12+4x",
        correctAnswer: 13,
    },
    { id: "", class: 5, question: "3x-4 = 4x-5+6(3x-2)", correctAnswer: 13 },
    { id: "", class: 5, question: "4x+8 = 5x-3+6(3-2x)", correctAnswer: 7 },
    { id: "", class: 5, question: "5x-9 = 3(x-6)+6(x-7)", correctAnswer: 51 },
    {
        id: "",
        class: 5,
        question: "Biết tổng 2 số bằng 49 và hiệu 2 số bằng 31, tìm số bé ?",
        correctAnswer: 9,
    },
    {
        id: "",
        class: 5,
        question:
            "Biết tổng 2 số bằng 36 và số lớn gấp 5 lần số bé, hỏi hiệu 2 số bằng bao nhiêu? ",
        correctAnswer: 24,
    },
    {
        id: "",
        class: 5,
        question: "Biết tổng 2 số bằng 42 và hiệu 2 số bằng 2, hỏi số lớn ?",
        correctAnswer: 22,
    },
    {
        id: "",
        class: 5,
        question: "Biết a + 3 = 2b và a - b = 6 tìm a + b ? ",
        correctAnswer: 24,
    },
    {
        id: "",
        class: 5,
        question: "Biết a - 3 = 4b và a - b = 18 tìm a + b",
        correctAnswer: 28,
    },
    {
        id: "",
        class: 5,
        question: "Biết a - 12 = 2b và a - b = 16 tìm a + b",
        correctAnswer: 24,
    },
    {
        id: "",
        class: 5,
        question: "Biết a - 3 = b và a + b = 33 tìm a - b",
        correctAnswer: 3,
    },
    {
        id: "",
        class: 5,
        question: "Biết a - 16 = b và a + b = 20 tìm a + 2b",
        correctAnswer: 22,
    },
    {
        id: "",
        class: 5,
        question: "Biết a - 9 = 2b và a - b = 11 tìm 2a - 3b",
        correctAnswer: 20,
    },
    {
        id: "",
        class: 5,
        question: "Biết a - b = 18 và a + b = 42 tìm a + 2b",
        correctAnswer: 54,
    },
];
