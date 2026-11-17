    const errorCorrectionLevels = {
        L: 1, // 11
        M: 0, // 10
        Q: 3, // 01
        H: 2 // 00
    };

    const versionInfoTable = {
        7: 0b000111110010010100,
        8: 0b001000010110111100,
        9: 0b001001101010011001,
        10: 0b001010010011010011,
        11: 0b001011101111110110,
        12: 0b001100011101100010,
        13: 0b001101100001000111,
        14: 0b001110011000001101,
        15: 0b001111100100101000,
        16: 0b010000101101111000,
        17: 0b010001010001011101,
        18: 0b010010101000010111,
        19: 0b010011010100110010,
        20: 0b010100100110100110,
        21: 0b010101011010000011,
        22: 0b010110100011001001,
        23: 0b010111011111101100,
        24: 0b011000111011000100,
        25: 0b011001000111100001,
        26: 0b011010111110101011,
        27: 0b011011000010001110,
        28: 0b011100110000011010,
        29: 0b011101001100111111,
        30: 0b011110110101110101,
        31: 0b011111001001010000,
        32: 0b100000100111010101,
        33: 0b100001011011110000,
        34: 0b100010100010111010,
        35: 0b100011011110011111,
        36: 0b100100101100001011,
        37: 0b100101010000101110,
        38: 0b100110101001100100,
        39: 0b100111010101000001,
        40: 0b101000110001101001
    };

const qrVersions = [
  {
    version: 1,
    size: 21,
    totalCodewords: 26,
    capacity: { L: 17, M: 14, Q: 11, H: 7 },
    eccBytes: { L: 7, M: 10, Q: 13, H: 17 },
    blocks: { L: 1, M: 1, Q: 1, H: 1 }
  },
  {
    version: 2,
    size: 25,
    totalCodewords: 44,
    capacity: { L: 32, M: 26, Q: 20, H: 14 },
    eccBytes: { L: 10, M: 16, Q: 22, H: 28 },
    blocks: { L: 1, M: 1, Q: 1, H: 1 }
  },
  {
    version: 3,
    size: 29,
    totalCodewords: 70,
    capacity: { L: 53, M: 42, Q: 32, H: 24 },
    eccBytes: { L: 15, M: 26, Q: 36, H: 44 },
    blocks: { L: 1, M: 1, Q: 2, H: 2 }
  },
  {
    version: 4,
    size: 33,
    totalCodewords: 100,
    capacity: { L: 78, M: 62, Q: 46, H: 34 },
    eccBytes: { L: 20, M: 36, Q: 52, H: 64 },
    blocks: { L: 1, M: 2, Q: 2, H: 4 }
  },
  {
    version: 5,
    size: 37,
    totalCodewords: 134,
    capacity: { L: 106, M: 84, Q: 60, H: 44 },
    eccBytes: { L: 26, M: 48, Q: 72, H: 88 },
    blocks: { L: 1, M: 2, Q: 2, H: 2 }
  },
  {
    version: 6,
    size: 41,
    totalCodewords: 172,
    capacity: { L: 134, M: 106, Q: 76, H: 58 },
    eccBytes: { L: 36, M: 64, Q: 96, H: 112 },
    blocks: { L: 2, M: 4, Q: 4, H: 4 }
  },
  {
    version: 7,
    size: 45,
    totalCodewords: 196,
    capacity: { L: 154, M: 122, Q: 88, H: 64 },
    eccBytes: { L: 40, M: 72, Q: 108, H: 130 },
    blocks: { L: 2, M: 4, Q: 2, H: 4 }
  },
  {
    version: 8,
    size: 49,
    totalCodewords: 242,
    capacity: { L: 192, M: 152, Q: 110, H: 84 },
    eccBytes: { L: 48, M: 88, Q: 132, H: 156 },
    blocks: { L: 2, M: 2, Q: 4, H: 4 }
  },
  {
    version: 9,
    size: 53,
    totalCodewords: 292,
    capacity: { L: 230, M: 180, Q: 132, H: 98 },
    eccBytes: { L: 60, M: 110, Q: 160, H: 192 },
    blocks: { L: 2, M: 3, Q: 4, H: 4 }
  },
  {
    version: 10,
    size: 57,
    totalCodewords: 346,
    capacity: { L: 271, M: 213, Q: 154, H: 119 },
    eccBytes: { L: 72, M: 130, Q: 192, H: 224 },
    blocks: { L: 2, M: 4, Q: 6, H: 6 }
  }
];

    const qrVersionsOLD = [{
            version: 1,
            size: 21,
            capacity: {
                L: 17,
                M: 14,
                Q: 11,
                H: 7
            },
            eccBytes: {
                L: 7,
                M: 10,
                Q: 13,
                H: 17
            }
        },
        {
            version: 2,
            size: 25,
            capacity: {
                L: 32,
                M: 26,
                Q: 20,
                H: 14
            },
            eccBytes: {
                L: 10,
                M: 16,
                Q: 22,
                H: 28
            }
        },
        {
            version: 3,
            size: 29,
            capacity: {
                L: 53,
                M: 42,
                Q: 32,
                H: 24
            },
            eccBytes: {
                L: 15,
                M: 26,
                Q: 36,
                H: 44
            }
        },
        {
            version: 4,
            size: 33,
            capacity: {
                L: 78,
                M: 62,
                Q: 46,
                H: 34
            },
            eccBytes: {
                L: 20,
                M: 36,
                Q: 52,
                H: 64
            }
        },
        {
            version: 5,
            size: 37,
            capacity: {
                L: 106,
                M: 84,
                Q: 60,
                H: 44
            },
            eccBytes: {
                L: 26,
                M: 48,
                Q: 72,
                H: 88
            }
        }
    ];

    const maskPatterns = {
        0: (x, y) => (x + y) % 2 === 0, // 101
        1: (x, y) => y % 2 === 0, // 100
        2: (x, y) => x % 3 === 0, // 111
        3: (x, y) => (x + y) % 3 === 0, // 110
        4: (x, y) => (Math.floor(y / 2) + Math.floor(x / 3)) % 2 === 0, // 001
        5: (x, y) => ((x * y) % 2) + ((x * y) % 3) === 0, // 000
        6: (x, y) => (((x * y) % 2) + ((x * y) % 3)) % 2 === 0, // 011
        7: (x, y) => (((x + y) % 2) + ((x * y) % 3)) % 2 === 0 // 010
    };

    const finderPattern = [
        [1, 1, 1, 1, 1, 1, 1],
        [1, 0, 0, 0, 0, 0, 1],
        [1, 0, 1, 1, 1, 0, 1],
        [1, 0, 1, 1, 1, 0, 1],
        [1, 0, 1, 1, 1, 0, 1],
        [1, 0, 0, 0, 0, 0, 1],
        [1, 1, 1, 1, 1, 1, 1]
    ];

    const alignmentPattern = [
        [1, 1, 1, 1, 1],
        [1, 0, 0, 0, 1],
        [1, 0, 1, 0, 1],
        [1, 0, 0, 0, 1],
        [1, 1, 1, 1, 1]
    ];

    const alignmentPositions = {
        1: [],
        2: [6, 18],
        3: [6, 22],
        4: [6, 26],
        5: [6, 30],
        6: [6, 34],
        7: [6, 22, 38],
        8: [6, 24, 42],
        9: [6, 26, 46],
        10: [6, 28, 50],
        11: [6, 30, 54],
        12: [6, 32, 58],
        13: [6, 34, 62],
        14: [6, 26, 46, 66],
        15: [6, 26, 48, 70],
        16: [6, 26, 50, 74],
        17: [6, 30, 54, 78],
        18: [6, 30, 56, 82],
        19: [6, 30, 58, 86],
        20: [6, 34, 62, 90],
        21: [6, 28, 50, 72, 94],
        22: [6, 26, 50, 74, 98],
        23: [6, 30, 54, 78, 102],
        24: [6, 28, 54, 80, 106],
        25: [6, 32, 58, 84, 110],
        26: [6, 30, 58, 86, 114],
        27: [6, 34, 62, 90, 118],
        28: [6, 26, 50, 74, 98, 122],
        29: [6, 30, 54, 78, 102, 126],
        30: [6, 26, 52, 78, 104, 130],
        31: [6, 30, 56, 82, 108, 134],
        32: [6, 34, 60, 86, 112, 138],
        33: [6, 30, 58, 86, 114, 142],
        34: [6, 34, 62, 90, 118, 146],
        35: [6, 30, 54, 78, 102, 126, 150],
        36: [6, 24, 50, 76, 102, 128, 154],
        37: [6, 28, 54, 80, 106, 132, 158],
        38: [6, 32, 58, 84, 110, 136, 162],
        39: [6, 26, 54, 82, 110, 138, 166],
        40: [6, 30, 58, 86, 114, 142, 170]
    }

function encodeData(str, targetDataCodewords) {
  const encoder = new TextEncoder();
  const byteArray = encoder.encode(str);

  const bits = [];
  // mode: 0100 (Byte)
  bits.push(0, 1, 0, 0);

  // length (Byte mód, v1–v9: 8 bit)
  const len = byteArray.length;
  for (let i = 7; i >= 0; i--) bits.push((len >> i) & 1);

  // payload
  for (let i = 0; i < len; i++) {
    for (let j = 7; j >= 0; j--) bits.push((byteArray[i] >> j) & 1);
  }

  const totalBits = targetDataCodewords * 8;

  // terminator (max 4 bit, de ne lépd túl)
  const remaining = totalBits - bits.length;
  const terminator = Math.min(4, Math.max(0, remaining));
  for (let i = 0; i < terminator; i++) bits.push(0);

  // byte-ra kerekítés
  while (bits.length % 8 !== 0 && bits.length < totalBits) bits.push(0);

  // alakítsuk kódwordökké
  const data = [];
  for (let i = 0; i < bits.length; i += 8) {
    let byte = 0;
    for (let j = 0; j < 8; j++) byte = (byte << 1) | bits[i + j];
    data.push(byte);
  }

  // 0xEC, 0x11 váltott padding a dataCodewords-ig
  let pad = 0;
  while (data.length < targetDataCodewords) {
    data.push(pad === 0 ? 0xEC : 0x11);
    pad ^= 1;
  }

  return data;
}

    function encodeDataOLD(str, maxDataBits) {
        const encoder = new TextEncoder();
        const byteArray = encoder.encode(str);
        const bits = [];

        bits.push(0, 1, 0, 0);

        const len = byteArray.length;
        for (let i = 7; i >= 0; i--) {
            bits.push((len >> i) & 1);
        }

        for (let i = 0; i < len; i++) {
            for (let j = 7; j >= 0; j--) bits.push((byteArray[i] >> j) & 1);
        }

        while (bits.length < maxDataBits) {
            if ((maxDataBits - bits.length) >= 8) {
                const padByte = bits.length % 16 === 0 ? 0xEC : 0x11;
                for (let i = 7; i >= 0; i--) bits.push((padByte >> i) & 1);
            } else {
                bits.push(0);
            }
        }

        const data = [];
        for (let i = 0; i < bits.length; i += 8) {
            let byte = 0;
            for (let j = 0; j < 8; j++) {
                byte = (byte << 1) | bits[i + j];
            }
            data.push(byte);
        }

        return data;
    }

    const GF256_BASE = 0x11d;
    const EXP_TABLE = new Array(512);
    const LOG_TABLE = new Array(256);

    (function initTables() {
        let x = 1;
        for (let i = 0; i < 255; i++) {
            EXP_TABLE[i] = x;
            LOG_TABLE[x] = i;
            x <<= 1;
            if (x & 0x100) x ^= GF256_BASE;
        }
        for (let i = 255; i < 512; i++) {
            EXP_TABLE[i] = EXP_TABLE[i - 255];
        }
    })();

    function gfMul(a, b) {
        if (a === 0 || b === 0) return 0;
        return EXP_TABLE[LOG_TABLE[a] + LOG_TABLE[b]];
    }

    function polyMul(p1, p2) {
        const result = new Array(p1.length + p2.length - 1).fill(0);
        for (let i = 0; i < p1.length; i++) {
            for (let j = 0; j < p2.length; j++) {
                result[i + j] ^= gfMul(p1[i], p2[j]);
            }
        }
        return result;
    }

    function generateGeneratorPolynomialOLD(degree) {
        let gen = [1];
        for (let i = 0; i < degree; i++) {
            gen = polyMul(gen, [1, EXP_TABLE[i]]);
        }
        return gen;
    }

    const GF256 = (() => {
        const exp = new Uint8Array(512);
        const log = new Uint8Array(256);
        let x = 1;
        for (let i = 0; i < 255; i++) {
            exp[i] = x;
            log[x] = i;
            x <<= 1;
            if (x & 0x100) x ^= 0x11d;
        }
        for (let i = 255; i < 512; i++) exp[i] = exp[i - 255];
        return {
            add: (a, b) => a ^ b,
            sub: (a, b) => a ^ b,
            mul: (a, b) => a && b ? exp[log[a] + log[b]] : 0,
            div: (a, b) => exp[(log[a] + 255 - log[b]) % 255],
            exp,
            log
        };
    })();

function generateGeneratorPolynomial(degree) {
  let gen = [1];
  for (let i = 0; i < degree; i++) {
    gen = polyMul(gen, [1, EXP_TABLE[i]]);
  }
  return gen; // hossz = degree + 1
}

function reedSolomon(data, eccLength, numBlocks = 1) {
  const generator = generateGeneratorPolynomial(eccLength); // hossz = eccLength + 1

  const blockSize = Math.ceil(data.length / numBlocks);
  const blocks = [];
  for (let i = 0; i < numBlocks; i++) {
    const start = i * blockSize;
    const end = Math.min(start + blockSize, data.length);
    const block = data.slice(start, end);
    const ecc = new Array(eccLength).fill(0);

    for (let j = 0; j < block.length; j++) {
      const factor = block[j] ^ ecc[0];
      ecc.shift();
      ecc.push(0);
      if (factor !== 0) {
        // A generator polinom: [g_n, g_{n-1}, ..., g_1, g_0]
        // ahol g_n = 1 (x^n koefficiense)
        // Az RS osztásban: ecc[k] ^= factor * generator[k+1]
        // (generator[0] = x^n koeff = 1, ezért nem használjuk)
        for (let k = 0; k < eccLength; k++) {
          ecc[k] ^= GF256.mul(generator[k + 1], factor);
        }
      }
    }
    blocks.push(ecc);
  }
  return blocks;
}

    function reedSolomonOLD(data, eccLength, numBlocks = 1) {
        const generator = generateGeneratorPolynomial(eccLength);

        const blockSize = Math.ceil(data.length / numBlocks);
        const blocks = [];
        for (let i = 0; i < numBlocks; i++) {
            const start = i * blockSize;
            const end = Math.min(start + blockSize, data.length);
            const block = data.slice(start, end);
            const ecc = new Array(eccLength).fill(0);
            for (let j = 0; j < block.length; j++) {
                let factor = block[j] ^ ecc[0];
                ecc.shift();
                ecc.push(0);
                if (factor !== 0) {
                    for (let k = 0; k < eccLength; k++) {
                        ecc[k] ^= GF256.mul(generator[k], factor);
                    }
                }
            }
            blocks.push(ecc);
        }
        return blocks;
    }

    function interleaveBlocks(dataBlocks, ecBlocks) {
        const result = [];
        const maxDataLength = Math.max(...dataBlocks.map(b => b.length));
        const maxEcLength = Math.max(...ecBlocks.map(b => b.length));

        for (let i = 0; i < maxDataLength; i++) {
            for (let block of dataBlocks) {
                if (i < block.length) {
                    result.push(block[i]);
                }
            }
        }

        for (let i = 0; i < maxEcLength; i++) {
            for (let block of ecBlocks) {
                if (i < block.length) {
                    result.push(block[i]);
                }
            }
        }

        return result;
    }

    function applyMask(matrix, reserved, maskId) {
        const maskFunc = maskPatterns[maskId];
        for (let y = 0; y < matrix.length; y++) {
            for (let x = 0; x < matrix.length; x++) {
                if (!reserved[y][x] && maskFunc(x, y)) {
                    matrix[y][x] ^= 1;
                }
            }
        }
    }

    function addFinderPattern(matrix, reserved, x, y) {
        for (let dy = -1; dy <= 7; dy++) {
            for (let dx = -1; dx <= 7; dx++) {
                const yy = y + dy;
                const xx = x + dx;
                if (yy >= 0 && yy < matrix.length && xx >= 0 && xx < matrix.length) {
                    if (dy >= 0 && dy < 7 && dx >= 0 && dx < 7) {
                        matrix[yy][xx] = finderPattern[dy][dx];
                    } else {
                        matrix[yy][xx] = 0;
                    }
                    reserved[yy][xx] = true;
                }
            }
        }
    }

    function addSeparators() {

    }

    function addTimmingPatterns(matrix, reserved) {
        for (let i = 8; i < matrix.length - 8; i++) {
            matrix[6][i] = i % 2 === 0 ? 1 : 0;
            matrix[i][6] = i % 2 === 0 ? 1 : 0;
            reserved[6][i] = true;
            reserved[i][6] = true;
        }
    }

    function addDarkModule(matrix, reserved) {
        const x = 8;
        const y = matrix.length - 8;
        matrix[y][x] = 1;
        reserved[y][x] = true;
    }

    function addFormatInformation(matrix, reserved, ecl, mask) {
        const eclBits = errorCorrectionLevels[ecl];
        let formatInfo = (eclBits << 3) | mask;

        // BCH(15,5) kódolás
        let generator = 0b10100110111;
        let formatData = formatInfo << 10;
        for (let i = 14; i >= 10; i--) {
            if ((formatData >> i) & 1) {
                formatData ^= generator << (i - 10);
            }
        }

        let formatBits = ((formatInfo << 10) | formatData) ^ 0b101010000010010;
        
        // *** KRITIKUS: A QR spec szerinti PONTOS pozíciók ***
        // FORMAT BITS INDEXELÉSE: bit 0 = első pozíció, bit 14 = utolsó
        const size = matrix.length;
        
        // Bal felső "L" alak (8 + 1 + 6 = 15 bit)
        // Bal oldali oszlop (x=8), fentről lefelé: bit 0-5, 7-8
        matrix[0][8] = (formatBits >> 0) & 1; reserved[0][8] = true;
        matrix[1][8] = (formatBits >> 1) & 1; reserved[1][8] = true;
        matrix[2][8] = (formatBits >> 2) & 1; reserved[2][8] = true;
        matrix[3][8] = (formatBits >> 3) & 1; reserved[3][8] = true;
        matrix[4][8] = (formatBits >> 4) & 1; reserved[4][8] = true;
        matrix[5][8] = (formatBits >> 5) & 1; reserved[5][8] = true;
        // timing pattern (6. sor) átugrása
        matrix[7][8] = (formatBits >> 6) & 1; reserved[7][8] = true;
        matrix[8][8] = (formatBits >> 7) & 1; reserved[8][8] = true;
        
        // Alsó sor (y=8), jobbról balra (timing előtt): bit 9-14
        matrix[8][7] = (formatBits >> 8) & 1; reserved[8][7] = true;
        matrix[8][5] = (formatBits >> 9) & 1; reserved[8][5] = true;
        matrix[8][4] = (formatBits >> 10) & 1; reserved[8][4] = true;
        matrix[8][3] = (formatBits >> 11) & 1; reserved[8][3] = true;
        matrix[8][2] = (formatBits >> 12) & 1; reserved[8][2] = true;
        matrix[8][1] = (formatBits >> 13) & 1; reserved[8][1] = true;
        matrix[8][0] = (formatBits >> 14) & 1; reserved[8][0] = true;

        // Jobb felső és bal alsó másolat (UGYANAZ a bit sorrend!)
        // Jobb felső: (y=8, x=size-1 .. size-8)
        matrix[8][size - 1] = (formatBits >> 0) & 1; reserved[8][size - 1] = true;
        matrix[8][size - 2] = (formatBits >> 1) & 1; reserved[8][size - 2] = true;
        matrix[8][size - 3] = (formatBits >> 2) & 1; reserved[8][size - 3] = true;
        matrix[8][size - 4] = (formatBits >> 3) & 1; reserved[8][size - 4] = true;
        matrix[8][size - 5] = (formatBits >> 4) & 1; reserved[8][size - 5] = true;
        matrix[8][size - 6] = (formatBits >> 5) & 1; reserved[8][size - 6] = true;
        matrix[8][size - 7] = (formatBits >> 6) & 1; reserved[8][size - 7] = true;
        matrix[8][size - 8] = (formatBits >> 7) & 1; reserved[8][size - 8] = true;
        
        // Bal alsó: (x=8, y=size-7 .. size-1)
        matrix[size - 7][8] = (formatBits >> 8) & 1; reserved[size - 7][8] = true;
        matrix[size - 6][8] = (formatBits >> 9) & 1; reserved[size - 6][8] = true;
        matrix[size - 5][8] = (formatBits >> 10) & 1; reserved[size - 5][8] = true;
        matrix[size - 4][8] = (formatBits >> 11) & 1; reserved[size - 4][8] = true;
        matrix[size - 3][8] = (formatBits >> 12) & 1; reserved[size - 3][8] = true;
        matrix[size - 2][8] = (formatBits >> 13) & 1; reserved[size - 2][8] = true;
        matrix[size - 1][8] = (formatBits >> 14) & 1; reserved[size - 1][8] = true;
    }

    function addAlignmentPatterns(matrix, reserved, version) {
        if (version === 1) return;
        const positions = alignmentPositions[version];
        positions.forEach((y) => {
            positions.forEach((x) => {
                const isInCorner =
                    (y === 6 && x === 6) ||
                    (y === 6 && x === positions[positions.length - 1]) ||
                    (y === positions[positions.length - 1] && x === 6);
                if (!isInCorner) {
                    for (let dy = 0; dy < 5; dy++) {
                        for (let dx = 0; dx < 5; dx++) {
                            const yy = y - 2 + dy;
                            const xx = x - 2 + dx;
                            if (
                                yy >= 0 && yy < matrix.length &&
                                xx >= 0 && xx < matrix.length
                            ) {
                                matrix[yy][xx] = alignmentPattern[dy][dx];
                                reserved[yy][xx] = true;
                            }
                        }
                    }
                }
            });
        });
    }

    function addVersionInformation(matrix, reserved, version) {
        if (version < 7) return;
        const versionBits = versionInfoTable[version];
        for (let i = 0; i < 18; i++) {
            const bit = (versionBits >> i) & 1;
            const y = i % 3;
            const x = Math.floor(i / 3);
            matrix[y][matrix.length - 11 + x] = bit;
            reserved[y][matrix.length - 11 + x] = true;
            matrix[matrix.length - 11 + x][y] = bit;
            reserved[matrix.length - 11 + x][y] = true;
        }
    }

    function addData(matrix, reserved, dataBits) {
        let bitIndex = 0;
        let upward = true;
        for (let x = matrix.length - 1; x > 0; x -= 2) {
            // Timing pattern (x=6) skip: ha x=6-ra léptél volna, ugorj x=5-re
            if (x === 6) x--;
            
            for (let y = 0; y < matrix.length; y++) {
                const row = upward ? matrix.length - 1 - y : y;
                
                // Két oszlop feldolgozása jobbról balra (x, majd x-1)
                for (let dx = 0; dx < 2; dx++) {
                    const col = x - dx;
                    if (col < 0 || row < 0 || col >= matrix.length || row >= matrix.length) continue;
                    if (reserved[row][col]) continue;
                    
                    if (bitIndex < dataBits.length) {
                        matrix[row][col] = dataBits[bitIndex++];
                    } else {
                        // Ha elfogytak a bitek, töltsd fel 0-val (remainder bits)
                        matrix[row][col] = 0;
                    }
                }
            }
            upward = !upward;
        }
    }

function reserveFormatInformationAreas(reserved, size) {
  // Bal felső L alak
  for (let i = 0; i <= 5; i++) reserved[i][8] = true;
  reserved[7][8] = true;
  reserved[8][8] = true;
  reserved[8][7] = true;
  reserved[8][5] = true;
  reserved[8][4] = true;
  reserved[8][3] = true;
  reserved[8][2] = true;
  reserved[8][1] = true;
  reserved[8][0] = true;

  // Jobb felső vízszintes sáv
  for (let i = 0; i < 8; i++) reserved[8][size - 1 - i] = true;
  
  // Bal alsó függőleges sáv
  for (let i = 0; i < 7; i++) reserved[size - 1 - i][8] = true;
}

function reserveVersionInformationAreas(reserved, size, version) {
  if (version < 7) return;
  // két 3x6 blokk a keresők mellett (ugyanott, ahova később írsz)
  for (let i = 0; i < 18; i++) {
    const y = i % 3;
    const x = Math.floor(i / 3);
    reserved[y][size - 11 + x] = true;
    reserved[size - 11 + x][y] = true;
  }
}

function createMatrix(dataBits, size, ecl, mask, matrix = null, reserved = null) {
  if (!matrix) matrix = Array.from({ length: size }, () => Array(size).fill(null));
  if (!reserved) reserved = Array.from({ length: size }, () => Array(size).fill(false));

  addFinderPattern(matrix, reserved, 0, 0);
  addFinderPattern(matrix, reserved, size - 7, 0);
  addFinderPattern(matrix, reserved, 0, size - 7);
  addTimmingPatterns(matrix, reserved);
  addDarkModule(matrix, reserved);

  const versionInfo = qrVersions.find(v => v.size === size);
  const version = versionInfo.version;
  addAlignmentPatterns(matrix, reserved, version);

  // ÚJ: előre foglaljuk a formátum-/verzióinfó területeket
  reserveFormatInformationAreas(reserved, size);
  reserveVersionInformationAreas(reserved, size, version);

  // data írása – FIGYELEM: NEM állítunk reserved-et!
  addData(matrix, reserved, dataBits);

  // maszk csak a data cellákon (reserved=false)
  applyMask(matrix, reserved, mask);

  // most írjuk felül a formátuminfót (és ezzel reserved=true marad ott)
  addFormatInformation(matrix, reserved, ecl, mask);
  addVersionInformation(matrix, reserved, version);

  // maradék nullok feltöltése 0-val
  for (let y = 0; y < size; y++) {
    for (let x = 0; x < size; x++) {
      if (matrix[y][x] === null) matrix[y][x] = 0;
    }
  }
  return matrix;
}

    function createMatrixOLD(dataBits, size, ecl, mask, matrix = null, reserved = null) {
        if (!matrix) matrix = Array.from({ length: size }, () => Array(size).fill(null));
        if (!reserved) reserved = Array.from({ length: size }, () => Array(size).fill(false));

        addFinderPattern(matrix, reserved, 0, 0);
        addFinderPattern(matrix, reserved, size - 7, 0);
        addFinderPattern(matrix, reserved, 0, size - 7);
        addTimmingPatterns(matrix, reserved);
        addDarkModule(matrix, reserved);

        const versionInfo = qrVersions.find(v => v.size === size);
        const version = versionInfo.version;
        addAlignmentPatterns(matrix, reserved, version);
        addVersionInformation(matrix, reserved, version);

        addData(matrix, reserved, dataBits);

        applyMask(matrix, reserved, mask);

        addFormatInformation(matrix, reserved, ecl, mask);

        for (let y = 0; y < size; y++) {
            for (let x = 0; x < size; x++) {
                if (matrix[y][x] === null) {
                    matrix[y][x] = 0;
                }
            }
        }

        return matrix;
    }

    function calculatePenalty(matrix) {
        const size = matrix.length;
        let penalty = 0;

        for (let y = 0; y < size; y++) {
            let runColor = matrix[y][0];
            let runLength = 1;
            for (let x = 1; x < size; x++) {
                if (matrix[y][x] === runColor) {
                    runLength++;
                    if (runLength === 5) penalty += 3;
                    else if (runLength > 5) penalty++;
                } else {
                    runColor = matrix[y][x];
                    runLength = 1;
                }
            }
        }

        for (let x = 0; x < size; x++) {
            let runColor = matrix[0][x];
            let runLength = 1;
            for (let y = 1; y < size; y++) {
                if (matrix[y][x] === runColor) {
                    runLength++;
                    if (runLength === 5) penalty += 3;
                    else if (runLength > 5) penalty++;
                } else {
                    runColor = matrix[y][x];
                    runLength = 1;
                }
            }
        }

        for (let y = 0; y < size - 1; y++) {
            for (let x = 0; x < size - 1; x++) {
                const color = matrix[y][x];
                if (matrix[y][x + 1] === color &&
                    matrix[y + 1][x] === color &&
                    matrix[y + 1][x + 1] === color) {
                    penalty += 3;
                }
            }
        }

        const pattern1 = [1, 0, 1, 1, 1, 0, 1, 0, 0, 0, 0];
        const pattern2 = [0, 0, 0, 0, 1, 0, 1, 1, 1, 0, 1];
        for (let y = 0; y < size; y++) {
            for (let x = 0; x <= size - 11; x++) {
                const row = matrix[y].slice(x, x + 11);
                if (row.join("") === pattern1.join("") || row.join("") === pattern2.join("")) penalty += 40;
            }
        }
        for (let x = 0; x < size; x++) {
            for (let y = 0; y <= size - 11; y++) {
                const col = [];
                for (let k = 0; k < 11; k++) col.push(matrix[y + k][x]);
                if (col.join("") === pattern1.join("") || col.join("") === pattern2.join("")) penalty += 40;
            }
        }

        let darkCount = 0;
        for (let y = 0; y < size; y++) {
            for (let x = 0; x < size; x++) {
                if (matrix[y][x]) darkCount++;
            }
        }
        const total = size * size;
        const percent = (darkCount * 100) / total;
        const prevMultipleOf5 = Math.floor(percent / 5) * 5;
        const nextMultipleOf5 = Math.ceil(percent / 5) * 5;
        penalty += Math.min(
            Math.abs(prevMultipleOf5 - 50) / 5,
            Math.abs(nextMultipleOf5 - 50) / 5
        ) * 10;

        return penalty;
    }

    function addQuietZone(matrix, size) {
        const quiet = 4;
        const newSize = size + 2 * quiet;
        const newMatrix = Array.from({ length: newSize }, () =>
            Array(newSize).fill(0)
        );
        for (let y = 0; y < size; y++) {
            for (let x = 0; x < size; x++) {
                newMatrix[y + quiet][x + quiet] = matrix[y][x];
            }
        }
        return newMatrix;
    }

function generate(text, eccLevel = "M", maskId = null) {
  // UTF-8 bájtok száma, NEM karakterek száma!
  const encoder = new TextEncoder();
  const byteLength = encoder.encode(text).length;
  
  // Automatikus ECC szint ajánlás hosszú szöveghez (opcionális)
  if (!eccLevel || eccLevel === "auto") {
    if (byteLength <= 10) eccLevel = "H";      // Rövid: magas redundancia
    else if (byteLength <= 20) eccLevel = "Q";
    else if (byteLength <= 40) eccLevel = "M";
    else eccLevel = "L";                       // Hosszú: alacsony redundancia
  }
  
  const versionInfo = qrVersions.find(v => v.capacity[eccLevel] >= byteLength);
  if (!versionInfo) throw new Error("Túl hosszú adat ehhez az ECC szinthez.");

  const dataCodewords = versionInfo.totalCodewords - versionInfo.eccBytes[eccLevel];
  const data = encodeData(text, dataCodewords);
  const eccLength = versionInfo.eccBytes[eccLevel];
  const numBlocks = versionInfo.blocks[eccLevel];

  // Adat blokkok felosztása
  const blockSize = Math.floor(dataCodewords / numBlocks);
  const dataBlocks = [];
  for (let i = 0; i < numBlocks; i++) {
    const start = i * blockSize;
    const end = Math.min(start + blockSize, data.length);
    dataBlocks.push(data.slice(start, end));
  }

  // Reed-Solomon ECC generálás blokkokként
  const ecBlocks = [];
  const eccPerBlock = eccLength / numBlocks;
  for (let i = 0; i < numBlocks; i++) {
    const blockEcc = reedSolomon(dataBlocks[i], eccPerBlock, 1);
    ecBlocks.push(blockEcc[0]);
  }

  const fullData = interleaveBlocks(dataBlocks, ecBlocks);

  // bájtok -> bitek
  const bits = [];
  fullData.forEach(byte => {
    for (let i = 7; i >= 0; i--) bits.push((byte >> i) & 1);
  });

  const size = versionInfo.size;
  let bestMatrix = null;
  let bestMaskId = 0;
  let minPenalty = Infinity;

  const tryMasks = maskId !== null && maskId !== undefined ? [Number(maskId)] : [0,1,2,3,4,5,6,7];

  for (const mid of tryMasks) {
    const matrix = Array.from({ length: size }, () => Array(size).fill(null));
    const reserved = Array.from({ length: size }, () => Array(size).fill(false));
    const candidate = createMatrix(bits, size, eccLevel, mid, matrix, reserved);
    const penalty = calculatePenalty(candidate);
    if (penalty < minPenalty) {
      minPenalty = penalty;
      bestMaskId = mid;
      bestMatrix = candidate;
    }
  }

  return {
    version: versionInfo.version,
    size,
    eccLevel,
    dataBytes: data,
    eccBytes: ecBlocks,
    fullData,
    bitStream: bits,
    maskId: bestMaskId,
    matrix: bestMatrix
  };
}

    function generateOLD(text, eccLevel = "L", maskId = null) {
        const versionInfo = qrVersions.find(v => v.capacity[eccLevel] >= text.length);
        if (!versionInfo) throw new Error("Túl hosszú adat ehhez az ECC szinthez.");

        const maxDataBits = versionInfo.capacity[eccLevel] * 8;
        const data = encodeData(text, maxDataBits);
        const eccLength = versionInfo.eccBytes[eccLevel];
        const ecBlocks = reedSolomon(data, eccLength);
        const ec = ecBlocks[0];
        const fullData = interleaveBlocks([data], [ec]);

        const bits = [];
        fullData.forEach(byte => {
            for (let i = 7; i >= 0; i--) {
                bits.push((byte >> i) & 1);
            }
        });

        const size = versionInfo.size;
        let bestMatrix = null;
        let bestReserved = null;
        let bestMaskId = 0;
        let minPenalty = Infinity;

        if (maskId !== null && maskId !== undefined) {
            const matrix = Array.from({ length: size }, () => Array(size).fill(null));
            const reserved = Array.from({ length: size }, () => Array(size).fill(false));
            const matrixCandidate = createMatrix(bits, size, eccLevel, Number(maskId), matrix, reserved);
            const penalty = calculatePenalty(matrixCandidate);
            if (penalty < minPenalty) {
                minPenalty = penalty;
                bestMaskId = Number(maskId);
                bestMatrix = matrixCandidate;
                bestReserved = reserved;
            }
        } else {
            for (let maskId = 0; maskId < 8; maskId++) {
                const matrix = Array.from({ length: size }, () => Array(size).fill(null));
                const reserved = Array.from({ length: size }, () => Array(size).fill(false));
                const matrixCandidate = createMatrix(bits, size, eccLevel, maskId, matrix, reserved);
                const penalty = calculatePenalty(matrixCandidate);
                if (penalty < minPenalty) {
                    minPenalty = penalty;
                    bestMaskId = maskId;
                    bestMatrix = matrixCandidate;
                    bestReserved = reserved;
                }
            }
        }

        return {
            version: versionInfo.version,
            size,
            eccLevel,
            dataBytes: data,
            eccBytes: ec,
            fullData,
            bitStream: bits,
            maskId: bestMaskId,
            matrix: bestMatrix,
            reserved: bestReserved
        };
    }

    function drawQR(matrix, canvasId) {
        const canvas = document.getElementById(canvasId);
        const dpr = window.devicePixelRatio || 1;
        const scale = 10;
        const quietZone = 4 * scale;
        const sizePx = matrix.length * scale + 2 * quietZone;

        // Canvas belső pixelméret (high DPI) és CSS méret szétválasztása
        canvas.width = Math.round(sizePx * dpr);
        canvas.height = Math.round(sizePx * dpr);
        canvas.style.width = sizePx + 'px';
        canvas.style.height = sizePx + 'px';

        const ctx = canvas.getContext("2d", { alpha: false });
        // *** KRITIKUS: Antialiasing kikapcsolása ***
        ctx.imageSmoothingEnabled = false;

        // Háttér
        ctx.fillStyle = "#ffffff";
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        // Skálázás DPR-hez
        ctx.scale(dpr, dpr);

        // Rajzolás egész pixelekre igazítva
        ctx.fillStyle = "#000000";
        for (let y = 0; y < matrix.length; y++) {
            for (let x = 0; x < matrix.length; x++) {
                if (!matrix[y][x]) continue; // csak a sötét modulok
                const rx = quietZone + x * scale;
                const ry = quietZone + y * scale;
                // Egész pixelek biztosítása
                const ix = Math.round(rx);
                const iy = Math.round(ry);
                const iw = Math.round((x + 1) * scale + quietZone) - ix;
                const ih = Math.round((y + 1) * scale + quietZone) - iy;
                ctx.fillRect(ix, iy, iw, ih);
            }
        }
    }

    /**
     * QR rajzolás logóval a közepén
     * @param {Array} matrix - QR mátrix
     * @param {string} canvasId - Canvas elem ID
     * @param {string} logoUrl - Logo kép URL (vagy base64 data URI)
     * @param {number} logoSize - Logo mérete a QR % arányában (alapért: 0.2 = 20%)
     */
    function drawQRWithLogo(matrix, canvasId, logoUrl, logoSize = 0.2) {
        // Először rajzoljuk meg a QR-t
        drawQR(matrix, canvasId);
        
        const canvas = document.getElementById(canvasId);
        const ctx = canvas.getContext("2d");
        const dpr = window.devicePixelRatio || 1;
        
        // Logo betöltése
        const logoImg = new Image();
        logoImg.crossOrigin = "anonymous"; // CORS policy
        
        logoImg.onload = function() {
            const scale = 10;
            const quietZone = 4 * scale;
            const qrSize = matrix.length * scale;
            
            // Logo mérete (px)
            const logoPixelSize = qrSize * logoSize;
            const logoX = quietZone + (qrSize - logoPixelSize) / 2;
            const logoY = quietZone + (qrSize - logoPixelSize) / 2;
            
            // Fehér háttér a logo alatt (jobb olvashatóság)
            const padding = 4;
            ctx.fillStyle = "#ffffff";
            ctx.fillRect(
                logoX - padding, 
                logoY - padding, 
                logoPixelSize + padding * 2, 
                logoPixelSize + padding * 2
            );
            
            // Logo rajzolása
            ctx.drawImage(logoImg, logoX, logoY, logoPixelSize, logoPixelSize);
        };
        
        logoImg.onerror = function() {
            console.error("Logo betöltési hiba:", logoUrl);
        };
        
        logoImg.src = logoUrl;
    }

    function generateQR() {
        const text = document.getElementById("qrInput").value;
        const ecc = document.getElementById("eccLevel").value;
        const mask = document.getElementById("mask").value;
        const result = generate(text, ecc, Number(mask));
        console.dir(result);
        drawQR(result.matrix, "qrCanvas");
    }

    function downloadPNG() {
        const canvas = document.getElementById("qrCanvas");
        const link = document.createElement("a");
        link.download = "qr_code.png";
        link.href = canvas.toDataURL();
        link.click();
    }

    // ===== HELPER FÜGGVÉNYEK GYAKORI HASZNÁLATI ESETEKHEZ =====

    /**
     * TOTP/MFA QR generálás (Google Authenticator, Microsoft Authenticator, stb.)
     * @param {string} secret - BASE32 kódolt titkos kulcs (A-Z, 2-7)
     * @param {string} user - Felhasználó azonosító (pl. email)
     * @param {string} issuer - Szolgáltatás neve (pl. "GitHub", "Google")
     * @param {string} canvasId - Canvas elem ID
     */
    function generateTOTP(secret, user, issuer, canvasId = "qrCanvas") {
        const uri = `otpauth://totp/${encodeURIComponent(issuer)}:${encodeURIComponent(user)}?secret=${secret}&issuer=${encodeURIComponent(issuer)}`;
        const result = generate(uri, "auto");
        drawQR(result.matrix, canvasId);
        return result;
    }

    /**
     * WiFi csatlakozási QR generálás
     * @param {string} ssid - WiFi hálózat neve
     * @param {string} password - WiFi jelszó
     * @param {string} type - Biztonsági típus: "WPA", "WEP", vagy "nopass"
     * @param {boolean} hidden - Rejtett hálózat-e
     * @param {string} canvasId - Canvas elem ID
     */
    function generateWiFi(ssid, password, type = "WPA", hidden = false, canvasId = "qrCanvas") {
        // Speciális karakterek escapelése
        const escape = (str) => str.replace(/([\\;,":])/g, '\\$1');
        
        let wifiString = `WIFI:T:${type};S:${escape(ssid)};`;
        if (password && type !== "nopass") {
            wifiString += `P:${escape(password)};`;
        }
        wifiString += `H:${hidden};;`;
        
        const result = generate(wifiString, "auto");
        drawQR(result.matrix, canvasId);
        return result;
    }

    /**
     * URL QR generálás (egyszerű link)
     * @param {string} url - Teljes URL (https://...)
     * @param {string} canvasId - Canvas elem ID
     */
    function generateURL(url, canvasId = "qrCanvas") {
        const result = generate(url, "auto");
        drawQR(result.matrix, canvasId);
        return result;
    }

    /**
     * Telefonhívás QR
     * @param {string} phoneNumber - Telefonszám (pl. +36301234567)
     * @param {string} canvasId - Canvas elem ID
     */
    function generatePhone(phoneNumber, canvasId = "qrCanvas") {
        const tel = `tel:${phoneNumber}`;
        const result = generate(tel, "auto");
        drawQR(result.matrix, canvasId);
        return result;
    }

    /**
     * vCard névjegy QR
     * @param {string} name - Teljes név
     * @param {string} phone - Telefonszám
     * @param {string} email - Email cím
     * @param {string} company - Cég név
     * @param {string} canvasId - Canvas elem ID
     */
    function generateVCard(name, phone, email, company, canvasId = "qrCanvas") {
        // Rövidebb vCard formátum (kevesebb üres sorokkal)
        const vcard = `BEGIN:VCARD
VERSION:3.0
FN:${name}
TEL:${phone}
EMAIL:${email}
ORG:${company}
END:VCARD`;
        
        const result = generate(vcard, "auto");
        drawQR(result.matrix, canvasId);
        return result;
    }

    /**
     * Geolokáció QR
     * @param {number} latitude - Szélesség
     * @param {number} longitude - Hosszúság
     * @param {string} canvasId - Canvas elem ID
     */
    function generateGeo(latitude, longitude, canvasId = "qrCanvas") {
        const geo = `geo:${latitude},${longitude}`;
        const result = generate(geo, "auto");
        drawQR(result.matrix, canvasId);
        return result;
    }

    /**
     * Naptár esemény QR
     * @param {string} summary - Esemény neve
     * @param {string} startDate - Kezdés (YYYYMMDDTHHMMSS)
     * @param {string} endDate - Vége (YYYYMMDDTHHMMSS)
     * @param {string} location - Helyszín
     * @param {string} canvasId - Canvas elem ID
     */
    function generateCalendar(summary, startDate, endDate, location, canvasId = "qrCanvas") {
        // Rövidebb formátum (nincs BEGIN:VCALENDAR wrapper)
        const vevent = `BEGIN:VEVENT
SUMMARY:${summary}
DTSTART:${startDate}
DTEND:${endDate}
LOCATION:${location}
END:VEVENT`;
        
        const result = generate(vevent, "auto");
        drawQR(result.matrix, canvasId);
        return result;
    }

    /**
     * Banki utalás QR (EPC QR - EU/SEPA szabvány)
     * @param {string} beneficiary - Kedvezményezett neve
     * @param {string} iban - IBAN számlaszám
     * @param {number} amount - Összeg
     * @param {string} reference - Közlemény
     * @param {string} currency - Valuta (EUR, HUF, USD, stb.)
     * @param {string} canvasId - Canvas elem ID
     */
    function generatePayment(beneficiary, iban, amount, reference, currency = "EUR", canvasId = "qrCanvas") {
        let paymentString;
        
        if (currency === "EUR") {
            // EPC QR Code standard (csak EUR esetén)
            paymentString = `BCD
002
1
SCT

${beneficiary}
${iban}
EUR${amount}

${reference}`;
        } else {
            // Általános formátum (HUF, USD, stb. - nem minden bank támogatja!)
            // Egyszerű strukturált szöveg
            paymentString = `BANK:${beneficiary}
IBAN:${iban}
AMOUNT:${amount} ${currency}
REF:${reference}`;
        }
        
        const result = generate(paymentString, "auto");
        drawQR(result.matrix, canvasId);
        return result;
    }

    /**
     * QR rajzolás szöveges felirattal alul
     * @param {Array} matrix - QR mátrix
     * @param {string} canvasId - Canvas elem ID
     * @param {string} text - Szöveg a QR alatt
     * @param {object} options - Opciók: fontSize, fontFamily, textColor, padding
     */
    function drawQRWithText(matrix, canvasId, text, options = {}) {
        const {
            fontSize = 14,
            fontFamily = 'Arial, sans-serif',
            textColor = '#000000',
            padding = 10
        } = options;
        
        const canvas = document.getElementById(canvasId);
        const dpr = window.devicePixelRatio || 1;
        const scale = 10;
        const quietZone = 4 * scale;
        const qrSizePx = matrix.length * scale + 2 * quietZone;
        
        // Canvas méretezés (QR + szöveg magasság)
        const textHeight = fontSize + padding * 2;
        const totalHeight = qrSizePx + textHeight;
        
        canvas.width = Math.round(qrSizePx * dpr);
        canvas.height = Math.round(totalHeight * dpr);
        canvas.style.width = qrSizePx + 'px';
        canvas.style.height = totalHeight + 'px';
        
        const ctx = canvas.getContext("2d", { alpha: false });
        ctx.imageSmoothingEnabled = false;
        
        // Háttér
        ctx.fillStyle = "#ffffff";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        
        // Skálázás DPR-hez
        ctx.scale(dpr, dpr);
        
        // QR rajzolás
        ctx.fillStyle = "#000000";
        for (let y = 0; y < matrix.length; y++) {
            for (let x = 0; x < matrix.length; x++) {
                if (!matrix[y][x]) continue;
                const rx = quietZone + x * scale;
                const ry = quietZone + y * scale;
                const ix = Math.round(rx);
                const iy = Math.round(ry);
                const iw = Math.round((x + 1) * scale + quietZone) - ix;
                const ih = Math.round((y + 1) * scale + quietZone) - iy;
                ctx.fillRect(ix, iy, iw, ih);
            }
        }
        
        // Szöveg rajzolás (simítás engedélyezve szöveghez)
        ctx.imageSmoothingEnabled = true;
        ctx.font = `${fontSize}px ${fontFamily}`;
        ctx.fillStyle = textColor;
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(text, qrSizePx / 2, qrSizePx + textHeight / 2);
    }