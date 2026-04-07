function matrica()
{
    //объявлем переменные
    var x11;
    var x12;
    var x13;

    var x21;
    var x22;
    var x23;

    var x31;
    var x32;
    var x33;

    var e1;
    var e2;
    var e3;

    var d;
    

    //Присваеваем значения переменым

    var x11 = 1*document.forma1.t11.value;
    var x12 = 1*document.forma1.t12.value;
    var x13 = 1*document.forma1.t13.value;
    var x21 = 1*document.forma1.t21.value;
    var x22 = 1*document.forma1.t22.value;
    var x23 = 1*document.forma1.t23.value;
    var x31 = 1*document.forma1.t31.value;
    var x32 = 1*document.forma1.t32.value;
    var x33 = 1*document.forma1.t33.value;

    var e1 = 1 * document.forma1.t1.value;
    var e2 = 1 * document.forma1.t2.value;
    var e3 = 1 * document.forma1.t3.value;
    
    //x11 x12 x13
    //x21 x22 x23
    //x31 x32 x33

    //вычисляем д
    var s1 = x11 * x22 * x33;
    var s2 = x21 * x32 * x13;
    var s3 = x12 * x23 * x31;
    var s4 = x13 * x22 * x31;
    var s5 = x11 * x32 * x23;
    var s6 = x21 * x12 * x33;
    var d = x11 * x22 * x33 + x21 * x32 * x13 + x12 * x23 * x31 - x13 * x22 * x31 - x11 * x32 * x23 - x21 * x12 * x33;
    //вычисляем д1
    var s11 = e1 * x22 * x33;
    var s12 = e2 * x32 * x13;
    var s13 = x12 * x23 * e3;
    var s14 = x13 * x22 * e3;
    var s15 = e1 * x32 * x23;
    var s16 = e2 * x12 * x33;
    var d1 = e1 * x22 * x33 + e2 * x32 * x13 + x12 * x23 * e3 - x13 * x22 * e3 - e1 * x32 * x23 - e2 * x12 * x33;

    var i1 = d1 / d
    //вычисляем д2
    var s21 = x11 * e2 * x33;
    var s22 = x21 * e3 * x13;
    var s23 = e1 * x23 * x31;
    var s24 = x13 * e2 * x31;
    var s25 = x11 * e3 * x23;
    var s26 = x21 * e1 * x33;
    var d2 = x11 * e2 * x33 + x21 * e3 * x13 + e1 * x23 * x31 - x13 * e2 * x31 - x11 * e3 * x23 - x21 * e1 * x33;

    //вычисляем д3

    var s31 = x11 * x22 * e3;
    var s32 = x21 * x32 * e1;
    var s33 = x12 * e2 * x31;
    var s34 = e1 * x22 * x31;
    var s35 = x11 * x32 * e2;
    var s36 = x21 * x12 * e3;
    var d3 = x11 * x22 * e3 + x21 * x32 * e1 + x12 * e2 * x31 - e1 * x22 * x31 - x11 * x32 * e2 - x21 * x12 * e3;
    
    var i2 = d2 / d;
    var i3 = d3 / d;



    document.forma1.res.value = d;
    document.forma1.ss1.value = s1;
    document.forma1.ss2.value = s2;
    document.forma1.ss3.value = s3;
    document.forma1.ss4.value = s4;
    document.forma1.ss5.value = s5;
    document.forma1.ss6.value = s6;

    document.forma1.res1.value = d1;
    document.forma1.ss11.value = s11;
    document.forma1.ss12.value = s12;
    document.forma1.ss13.value = s13;
    document.forma1.ss14.value = s14;
    document.forma1.ss15.value = s15;
    document.forma1.ss16.value = s16;

    document.forma1.I1.value = i1;
    document.forma1.I2.value = i2;
    document.forma1.I3.value = i3;

    document.forma1.res2.value = d2;
    document.forma1.ss21.value = s21;
    document.forma1.ss22.value = s22;
    document.forma1.ss23.value = s23;
    document.forma1.ss24.value = s24;
    document.forma1.ss25.value = s25;
    document.forma1.ss26.value = s26;

    document.forma1.res3.value = d3;
    document.forma1.ss31.value = s31;
    document.forma1.ss32.value = s32;
    document.forma1.ss33.value = s33;
    document.forma1.ss34.value = s34;
    document.forma1.ss35.value = s35;
    document.forma1.ss36.value = s36;
    
}
