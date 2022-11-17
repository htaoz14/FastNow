// all images imported from images directory
import product_01_image_01 from "../images/product_01.jpg";
import product_01_image_02 from "../images/product_01.1.jpg";
import product_01_image_03 from "../images/product_01.3.jpg";

import product_02_image_01 from "../images/product_2.1.jpg";
import product_02_image_02 from "../images/product_2.2.jpg";
import product_02_image_03 from "../images/product_2.3.jpg";

import product_03_image_01 from "../images/product_3.1.jpg";
import product_03_image_02 from "../images/product_3.2.jpg";
import product_03_image_03 from "../images/product_3.3.jpg";

import product_04_image_01 from "../images/product_4.1.jpg";
import product_04_image_02 from "../images/product_4.2.jpg";
import product_04_image_03 from "../images/product_4.3.png";

import product_05_image_01 from "../images/product_04.jpg";
import product_05_image_02 from "../images/product_08.jpg";
import product_05_image_03 from "../images/product_09.jpg";

import product_06_image_01 from "../images/bread(1).png";
import product_06_image_02 from "../images/bread(2).png";
import product_06_image_03 from "../images/bread(3).png";

const products = [
  {
    id: "01",
    title: "Burger gà",
    price: 70000,
    image01: product_01_image_01,
    image02: product_01_image_02,
    image03: product_01_image_03,
    category: "Burger",

    desc: " Bạn đang phân vân chất lượng? Bánh của chúng tôi được tạo ra bởi nguyên liệu siêu sạch, tuyển chọn từng ngọn rau, từng túi nước sốt. Bữa trưa không tốn thời gian, chỉ cần 1 chiếc burger căng đầy và chút nước chanh sẽ lấp đầy dạ dày của bạn nhanh chóng. Không ai biết trước được, ăn 1 lần, bạn có thể quên được hương vị của burger gà chẳng?",
  },

  {
    id: "02",
    title: "Pizza chay",
    price: 80000,
    image01: product_02_image_01,
    image02: product_02_image_02,
    image03: product_02_image_03,
    category: "Pizza",

    desc: "Bạn muốn ăn kiêng , đang ăn chay để healthy hơn nhưng bạn vẫn muốn ăn pizza đừng lo vì món pizza chay này được làm ra để cho bạn thưởng thức . Hãy đặt ngay không cần đắn đo nhé!",
  },

  {
    id: "03",
    title: "2x Pizza Phô mai",
    price: 190000,
    image01: product_03_image_01,
    image02: product_03_image_02,
    image03: product_03_image_03,
    category: "Pizza",

    desc: "Phô mai kết hợp cùng pizza , các bạn đang nuốt nước miếng phải không , thưởng thức ngay không thể bỏ lỡ",
  },

  {
    id: "04",
    title: "Pizza làn sóng Mecio",
    price: 110000,
    image01: product_04_image_01,
    image02: product_04_image_02,
    image03: product_04_image_03,
    category: "Pizza",

    desc: "Hương vị đặc trưng Bắc Mĩ sẽ được hòa quyện vào với chiếc pizza mới mẻ này",
  },

  {
    id: "05",
    title: "Burger phô mai",
    price: 90000,
    image01: product_05_image_01,
    image02: product_05_image_02,
    image03: product_05_image_03,
    category: "Burger",

    desc: "x2 phô mai có làm bạn xao xuyến , burger đặc trưng của nước Mĩ sẽ được kết hợp vào với nhau tạo nên 1 tuyệt phẩm",
  },
  {
    id: "06",
    title: "Burger Phở",
    price: 110000,
    image01: product_01_image_01,
    image02: product_01_image_02,
    image03: product_01_image_03,
    category: "Burger",

    desc: "Món ăn được rất nhiều người Việt chào đón đó chính là Burger vị Phở thần thánh,đậm đà của burger và ngọt ngào của phở sẽ  làm chọ bạn thấy nó ngon miệng .",
  },

  {
    id: "07",
    title: "Pizza xúc xích",
    price: 115000,
    image01: product_02_image_02,
    image02: product_02_image_01,
    image03: product_02_image_03,
    category: "Pizza",

    desc: "1 món ăn truyền thống sẽ cho bạn thấy tại sao pizza lại là đồ ăn nhanh ngon số 1 nước Mỹ",
  },

  {
    id: "08",
    title: "Pizza cá ngừ",
    price: 110000,
    image01: product_03_image_02,
    image02: product_03_image_01,
    image03: product_03_image_03,
    category: "Pizza",

    desc: "Cá ngừ tươi được kết hợp với pizza tạo ra hương vị mới mẻ khiến bạn không thể nào quên",
  },

  {
    id: "09",
    title: "Pizza kim chi  ",
    price: 100000,
    image01: product_04_image_02,
    image02: product_04_image_01,
    image03: product_04_image_03,
    category: "Pizza",

    desc: "Pizza và kim chi kết hợp thì bạn thấy thế nào? mới lạ và độc đáo phải không",
  },

  {
    id: "10",
    title: "Bugger Bò kobe",
    price: 350000,
    image01: product_05_image_02,
    image02: product_05_image_01,
    image03: product_05_image_03,
    category: "Burger",

    desc: "Thịt bò thường hả ? không , chúng tôi ăn bò kobe ngon số 1 thế giới không phải bàn cãi",
  },

  {
    id: "11",
    title: "Bánh mì bơ sữa  ",
    price: 69000,
    image01: product_06_image_01,
    image02: product_06_image_02,
    image03: product_06_image_03,
    category: "Bread",

    desc: "Ngũ cốc cực tốt cho sức khỏe vì nó rất nhiều dinh dưỡng , chiếc bánh mì dành cho nhưng người quan tâm về dinh dưỡng ",
  },

  {
    id: "12",
    title: "Bánh mì kem ",
    price: 25000,
    image01: product_06_image_02,
    image02: product_06_image_01,
    image03: product_06_image_03,
    category: "Bread",

    desc: "Bánh mì thơm ngon nóng hổi được ra lò nhằm phục vụ những thực khách khó tính vì nó hoàn hảo về mọi mặt",
  },

  {
    id: "13",
    title: "Bánh mì dài",
    price: 15000,
    image01: product_06_image_03,
    image02: product_06_image_02,
    image03: product_06_image_03,
    category: "Bread",

    desc: "Cá chắc ai cũng trải qua thời kì cầm bánh mì mỗi khi đi học , và nó sẽ được ra lò để cho các bạn thưởng thích hương vị ngày xưa",
  },
];

export default products;
