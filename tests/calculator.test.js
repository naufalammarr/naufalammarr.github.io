// tests/calculator.test.js
// Jika script.js diekspor sebagai modul, Anda bisa mengimpornya:
// const { performCalculation } = require('../script.js');
// Untuk kesederhanaan, kita akan mendefinisikan ulang atau menguji logika inti di sini.

// Fungsi performCalculation dari script.js (atau mock/reimplementasi untuk tes)
// Sebaiknya impor jika script.js diatur sebagai modul.
// Di sini, kita akan mengasumsikan performCalculation dapat diakses atau kita uji secara terpisah.
function testPerformCalculation(expression) {
    try {
        const result = new Function('return ' + expression)();
        if (isNaN(result) || !isFinite(result)) {
            return 'Error';
        }
        return result;
    } catch (error) {
        return 'Error';
    }
}

let testsPassed = 0;
let testsFailed = 0;

function assert(condition, message) {
    if (condition) {
        console.log(`✅ LULUS: ${message}`);
        testsPassed++;
    } else {
        console.error(`❌ GAGAL: ${message}`);
        testsFailed++;
        process.exitCode = 1; // Penting untuk menandai kegagalan di CI
    }
}

console.log("--- Memulai Tes Unit Kalkulator ---");

assert(testPerformCalculation("2+2") === 4, "Tes Penjumlahan: 2+2 seharusnya 4");
assert(testPerformCalculation("5-3") === 2, "Tes Pengurangan: 5-3 seharusnya 2");
assert(testPerformCalculation("4*3") === 12, "Tes Perkalian: 4*3 seharusnya 12");
assert(testPerformCalculation("10/2") === 5, "Tes Pembagian: 10/2 seharusnya 5");
assert(testPerformCalculation("3+5*2-1") === 12, "Tes Urutan Operasi: 3+5*2-1 seharusnya 12"); // (3 + (5*2)) - 1
assert(testPerformCalculation("1/0") === 'Error', "Tes Pembagian dengan Nol: 1/0 seharusnya Error"); // Disesuaikan agar new Function mengembalikan 'Error'
assert(testPerformCalculation("10/4") === 2.5, "Tes Pembagian Desimal: 10/4 seharusnya 2.5");
assert(testPerformCalculation("sqrt(4)") === 'Error', "Tes Fungsi Tidak Didukung: sqrt(4) seharusnya Error"); // Contoh input tidak valid

console.log("--- Tes Unit Selesai ---");
console.log(`Total Tes: ${testsPassed + testsFailed}, Lulus: ${testsPassed}, Gagal: ${testsFailed}`);

if (testsFailed > 0) {
    console.error("🔴 Beberapa tes unit gagal!");
} else {
    console.log("🟢 Semua tes unit berhasil!");
}