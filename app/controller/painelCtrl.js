app.controller('painelCtrl', function($scope,$timeout,$interval,$http) {
    var ctx1 = document.getElementById('myChartGeracao').getContext('2d');

    var myChartGeracao = new Chart(ctx1, {
        type: 'line',
        data: {
          labels: [],
          datasets: [
            {
                label: "CSVPA",
                data: [],
                fill: false,
                borderColor: '#377eb8',
                backgroundColor: '#377eb899',
                pointRadius: 0,
                tension: 0
            },
            {
                label: "CMRO2",
                data: [],
                fill: false,
                borderColor: '#66a61e',
                backgroundColor: '#66a61e99',
                pointRadius: 0,
                tension: 0
            },
            {
                label: "CQ138",
                data: [],
                fill: false,
                borderColor: '#984ea3',
                backgroundColor: '#984ea399',
                pointRadius: 0,
                tension: 0
            },
            {
                label: "CQ69",
                data: [],
                fill: false,
                borderColor: '#00d2d5',
                backgroundColor: '#00d2d599',
                pointRadius: 0,
                tension: 0
            },
            {
                label: "CLIV2",
                data: [],
                fill: false,
                borderColor: '#ff7f00',
                backgroundColor: '#ff7f0099',
                pointRadius: 0,
                tension: 0
            },
            {
                label: "Melo",
                data: [],
                fill: false,
                borderColor: '#af8d00',
                backgroundColor: '#af8d0099',
                pointRadius: 0,
                tension: 0
            }
        ]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          title: {
            display: true,
            text: 'Geração Conjuntos e Importação [MW]',
            fontColor: '#000'
          },
            tooltips: {
                mode: 'index',
                intersect: false,
            },
            hover: {
                mode: 'nearest',
                intersect: true
            },
          legend: {
            display: true,
            position: 'bottom',
            aling: 'center',
            labels: {
                fontColor: '#000',
                boxWidth: 15,
                fontSize: 9,
            }
          },
          scales: {
            yAxes: [{
                scaleLabel: {
                    display: false,
                    labelString: 'MW'
                },
                ticks: {
                    beginAtZero: true
                }
            }]
          }
        }
    });
    var ctx2 = document.getElementById('myChartFluxo').getContext('2d');
    var myChartFluxo = new Chart(ctx2, {
        type: 'line',
        data: {
          labels: [],
          datasets: [
            {
                label: "Fluxo LT",
                data: [],
                fill: false,
                borderColor: '#377eb8',
                backgroundColor: '#377eb899',
                pointRadius: 0,
                tension: 0
            },
            {
                label: "Limite LT",
                data: [],
                fill: false,
                borderColor: '#ff0029',
                backgroundColor: '#ff002999',
                pointRadius: 0,
                tension: 0
            }
        ]
        },
        elements: {
            line: {
                tension: 0
            }
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          title: {
            display: true,
            text: 'Fluxo na LT [MW]',
            fontColor: '#000'
          },
          tooltips: {
                mode: 'index',
                intersect: false,
            },
            hover: {
                mode: 'nearest',
                intersect: true
            },
          legend: {
            display: true,
            position: 'bottom',
            aling: 'center',
            labels: {
                fontColor: '#000',
                boxWidth: 15,
                fontSize: 9
            }
          },
          scales: {
            yAxes: [{
                scaleLabel: {
                    display: false,
                    labelString: 'MW'
                },
                ticks: {
                    beginAtZero: true
                }
            }]
          }
        }
    });
    var ctx3 = document.getElementById("myChartCorte").getContext('2d');
    var myChartCorte = new Chart(ctx3, {
        type: 'pie',
        data: {
            labels: [
                "CSVPA",
                "CMRO2",
                "CQ138",
                "CQ69",
                "CLIV2"],
          datasets: [{
            data: [0,0,0,0,0],
            backgroundColor: [
                "#377eb899",
                "#66a61e99",
                "#984ea399",
                "#00d2d599",
                "#ff7f0099"
            ],
            borderColor: [
                "#377eb8",
                "#66a61e",
                "#984ea3",
                "#00d2d5",
                "#ff7f00"
            ],
          }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            tooltips: {
                  mode: 'index',
                  intersect: false,
              },
              hover: {
                  mode: 'nearest',
                  intersect: true
              },
            legend: {
              display: true,
              position: 'bottom',
              aling: 'center',
              labels: {
                  fontColor: '#000',
                  boxWidth: 15,
                  fontSize: 9
              }
            }
        }
    });
    $scope.nodes = new vis.DataSet([
        {id: 1,  label: 'GBI1', x: 44, y: 7},
        {id: 2,  label: 'STA', x: 256, y: 12},
        {id: 3,  label: 'GBI2', x: 44, y: 29},
        {id: 4,  label: 'UTUR', x: 18, y: 44},
        {id: 44444, x: 18, y: 50, shape: 'image', size: 2.5, image: 'consumidorlivre/simulador/app/img/icotermica.png'},
        {id: 5,  label: 'MBR', x: 88, y: 43},
        {id: 6,  label: 'SBO2', x: 139, y: 53, group: 'caixa_amarela'},
        {id: 7,  label: 'SVI', x: 140, y: 71},
        {id: 8,  label: 'URU5', x: 17, y: 81},
        {id: 9,  label: 'ALE2', x: 126, y: 127},
        {id: 10,  label: 'CUR', x: 37, y: 98},
        {id: 11,  label: 'RIV', x: 26, y: 135},
        {id: 12,  label: 'LIV2', x: 90, y: 135},
        {id: 13,  label: 'CCH', x: 60, y: 115},
        {id: 1333, x: 74, y: 114, shape: 'image', size: 3.5, image: 'consumidorlivre/simulador/app/img/icoeolica.png'},
        {id: 14,  label: 'SMA3', x: 140, y: 110},
        {id: 15,  label: 'BAG2', x: 146, y: 147},
        {id: 16,  label: 'PIN2', x: 393, y: 24},
        {id: 17,  label: 'UHFC', x: 459, y: 25},
        {id: 18,  label: 'MIS', x: 198, y: 54},
        {id: 19,  label: 'SROl', x: 287, y: 50},
        {id: 20,  label: 'SAG2', x: 254, y: 75},
        {id: 21,  label: 'IJU2', x: 306, y: 75},
        {id: 22,  label: 'UDFR', x: 188, y: 111},
        {id: 23,  label: 'UITA', x: 231, y: 110},
        {id: 24,  label: 'UPRE', x: 307, y: 110},
        {id: 25,  label: 'GRT', x: 369, y: 49},
        {id: 26,  label: 'UHPF', x: 426, y: 51},
        {id: 27,  label: 'TPR2', x: 347, y: 81},
        {id: 28,  label: 'SMT', x: 383, y: 83},
        {id: 29,  label: 'GAR1', x: 383, y: 99},
        {id: 30,  label: 'NPR2', x: 424, y: 100},
        {id: 31,  label: 'LVE2', x: 475, y: 83},
        {id: 32,  label: 'MLO', x: 27, y: 152},
        {id: 322,  label: 'xxxx', x: 29, y: 158, group: 'geracao'},
        {id: 33,  label: 'CTA', x: 65, y: 153},
        {id: 34,  label: 'PME', x: 112, y: 152},
        {id: 35,  label: 'SCR1', x: 169, y: 153},
        {id: 36,  label: 'CHA', x: 209, y: 152},
        {id: 37,  label: 'SCH2', x: 308, y: 152},
        {id: 38,  label: 'CSPVA', x: 29, y: 176, group: 'eolica'},
        {id: 388,  label: 'xxxx', x: 39, y: 182, group: 'geracao'},
        {id: 38888, x: 22, y: 182, shape: 'image', size: 3.5, image: 'consumidorlivre/simulador/app/img/icoeolica.png'},
        {id: 39,  label: 'UTEC', x: 160, y: 172},
        {id: 3999, x: 160, y: 177, shape: 'image', size: 2.5, image: 'consumidorlivre/simulador/app/img/icotermica.png'},
        {id: 40,  label: 'CLIV2', x: 73, y: 185, group: 'eolica'},
        {id: 400,  label: 'xxxx', x: 81, y: 192, group: 'geracao'},
        {id: 4000, x: 68, y: 192, shape: 'image', size: 3.5, image: 'consumidorlivre/simulador/app/img/icoeolica.png'},
        {id: 41,  label: 'QUI69', x: 88, y: 236, group: 'eolica'},
        {id: 411,  label: 'xxxx', x: 87, y: 243, group: 'geracao'},
        {id: 4111, x: 74, y: 243, shape: 'image', size: 3.5, image: 'consumidorlivre/simulador/app/img/icoeolica.png'},
        {id: 42,  label: 'QUI138', x: 58, y: 206, group: 'eolica'},
        {id: 422,  label: 'xxxx', x: 68, y: 212, group: 'geracao'},
        {id: 4222, x: 55, y: 212, shape: 'image', size: 3.5, image: 'consumidorlivre/simulador/app/img/icoeolica.png'},
        {id: 43,  label: 'QUI', x: 87, y: 216},
        {id: 44,  label: 'CMRO2', x: 29, y: 226, group: 'eolica'},
        {id: 444,  label: 'xxxx', x: 39, y: 233, group: 'geracao'},
        {id: 4444, x: 22, y: 233, shape: 'image', size: 3.5, image: 'consumidorlivre/simulador/app/img/icoeolica.png'},
        {id: 45,  label: 'PEL3', x: 112, y: 198},
        {id: 46,  label: 'CAM', x: 162, y: 197},
        {id: 47,  label: 'CAM3', x: 111, y: 245},
        {id: 48,  label: 'PPE', x: 220, y: 184},
        {id: 49,  label: 'UHCA', x: 452, y: 130},
        {id: 50,  label: 'FAR', x: 386, y: 152},
        {id: 51,  label: 'LAJ2', x: 345, y: 130},
        {id: 52,  label: 'MCL', x: 426, y: 149},
        {id: 53,  label: 'UHMC', x: 451, y: 151},
        {id: 54,  label: 'UHQJ', x: 454, y: 167},
        {id: 55,  label: 'CAX5', x: 424, y: 185},
        {id: 56,  label: 'UHBG', x: 479, y: 150},
        {id: 57,  label: 'CAX2', x: 366, y: 242},
        {id: 58,  label: 'LGR', x: 425, y: 243},
        {id: 59,  label: 'NSR', x: 220, y: 274},
        {id: 60,  label: 'PNO', x: 30, y: 274},
        {id: 61,  label: 'ELD', x: 66, y: 283},
        {id: 62,  label: 'GUA2', x: 185, y: 213},
        {id: 63,  label: 'LAG', x: 442, y: 280},
        {id: 64,  label: 'ABT', x: 477, y: 281},
        {id: 65,  label: 'CTT', x: 366, y: 293},
        {id: 66,  label: 'PAL9', x: 25, y: 310},
        {id: 67,  label: 'CIN', x: 150, y: 312},
        {id: 68,  label: 'CNA1', x: 91, y: 321},
        {id: 69,  label: 'CAC1', x: 71, y: 336},
        {id: 70,  label: 'CNA3', x: 110, y: 336},
        {id: 71,  label: 'PAL4', x: 23, y: 352},
        {id: 72,  label: 'UTST', x: 96, y: 370},
        {id: 722, x: 96, y: 375, shape: 'image', size: 2.5, image: 'consumidorlivre/simulador/app/img/icotermica.png'},
        {id: 73,  label: 'CNA2', x: 131, y: 370},
        {id: 74,  label: 'PA10', x: 56, y: 375},
        {id: 75,  label: 'MDE', x: 34, y: 384},
        {id: 76,  label: 'PUC', x: 36, y: 396},
        {id: 77,  label: 'GRA3', x: 196, y: 394},
        {id: 78,  label: 'PAL8', x: 96, y: 406},
        {id: 79,  label: 'PA12', x: 62, y: 420},
        {id: 80,  label: 'GRA2', x: 150, y: 427},
        {id: 81,  label: 'PAL6', x: 24, y: 433},
        {id: 82,  label: 'GRA', x: 150, y: 443},
        {id: 83,  label: 'VAI', x: 229, y: 308},
        {id: 84,  label: 'CAX6', x: 365, y: 345},
        {id: 85,  label: 'RSU', x: 442, y: 339, group: 'caixa_amarela'},
        {id: 86,  label: 'FIB', x: 196, y: 358},
        {id: 87,  label: 'FHA', x: 425, y: 359},
        {id: 88,  label: 'ATL2', x: 234, y: 394},
        {id: 89,  label: 'UECI', x: 273, y: 383},
        {id: 899, x: 286, y: 382, shape: 'image', size: 3.5, image: 'consumidorlivre/simulador/app/img/icoeolica.png'},
        {id: 90,  label: 'OSO2', x: 272, y: 394},
        {id: 91,  label: 'TAQ', x: 317, y: 394},
        {id: 92,  label: 'NPE2', x: 346, y: 395},
        {id: 93,  label: 'CAX', x: 384, y: 395},
        {id: 94,  label: 'XLA', x: 234, y: 407},
        {id: 944, x: 223, y: 405, shape: 'image', size: 3.5, image: 'consumidorlivre/simulador/app/img/icoeolica.png'},
        {id: 95,  label: 'ACA', x: 290, y: 415},
        {id: 955, x: 290, y: 421, shape: 'image', size: 3.5, image: 'consumidorlivre/simulador/app/img/icoeolica.png'},
        {id: 96,  label: 'LBA', x: 274, y: 418},
        {id: 966, x: 274, y: 424, shape: 'image', size: 3.5, image: 'consumidorlivre/simulador/app/img/icoeolica.png'},
        {id: 97,  label: 'CBO', x: 276, y: 437},
        {id: 98,  label: 'CAX', x: 390, y: 409, group: 'caixa_amarela'},
        {id: 99,  label: 'SID', x: 424, y: 411},
        {id: 100,  label: 'VIA3', x: 70, y: 453},
        {id: 101,  label: 'UTLB', x: 395, y: 462},
        {id: 1011, x: 395, y: 467, shape: 'image', size: 2.5, image: 'consumidorlivre/simulador/app/img/icotermica.png'},
        {id: 102,  label: 'JLB', x: 424, y: 461},
        {id: 103,  label: 'PTL', x: 94, y: 470},
        {id: 104,  label: 'CVIA', x: 117, y: 470},
        {id: 105,  label: 'PA13', x: 23, y: 483},
        {id: 106,  label: 'UTLA', x: 422, y: 486},
        {id: 1066, x: 422, y: 491, shape: 'image', size: 2.5, image: 'consumidorlivre/simulador/app/img/icotermica.png'},
        {id: 107,  label: 'UTLC', x: 458, y: 487},
        {id: 1077, x: 458, y: 492, shape: 'image', size: 2.5, image: 'consumidorlivre/simulador/app/img/icotermica.png'},
        {id: 108,  label: 'XAN', x: 555, y: 25},
        {id: 109,  label: 'UHSO', x: 644, y: 26},
        {id: 110,  label: 'PTO', x: 597, y: 32},
        {id: 111,  label: 'FOC', x: 698, y: 25},
        {id: 112,  label: 'CEL', x: 739, y: 25},
        {id: 113,  label: 'CVO', x: 811, y: 24},
        {id: 114,  label: 'STF6', x: 845, y: 8},
        {id: 115,  label: 'GUA', x: 880, y: 25},
        {id: 116,  label: 'DOU', x: 918, y: 23},
        {id: 117,  label: 'FIN', x: 764, y: 41},
        {id: 118,  label: 'RZS', x: 729, y: 63},
        {id: 119,  label: 'CVN', x: 840, y: 58},
        {id: 120,  label: 'UMS', x: 878, y: 58},
        {id: 121,  label: 'IVI2', x: 918, y: 56},
        {id: 122,  label: 'COR2', x: 949, y: 56},
        {id: 123,  label: 'UHSS', x: 641, y: 74},
        {id: 124,  label: 'NPP', x: 918, y: 92},
        {id: 125,  label: 'RBE', x: 952, y: 92},
        {id: 126,  label: 'UHIT', x: 538, y: 103},
        {id: 127,  label: 'YTA', x: 576, y: 103, group: 'caixa_amarela'},
        {id: 128,  label: 'SSA', x: 644, y: 102},
        {id: 129,  label: 'SCX', x: 781, y: 101},
        {id: 130,  label: 'APA', x: 894, y: 108},
        {id: 131,  label: 'PPR', x: 918, y: 115},
        {id: 132,  label: 'CMO', x: 790, y: 126},
        {id: 133,  label: 'SDI', x: 857, y: 130},
        {id: 134,  label: 'MCH', x: 573, y: 160},
        {id: 135,  label: 'MGA', x: 856, y: 159},
        {id: 136,  label: 'UHCN', x: 538, y: 180},
        {id: 137,  label: 'SGD', x: 642, y: 180},
        {id: 138,  label: 'JATT', x: 942, y: 187},
        {id: 139,  label: 'VID', x: 614, y: 200},
        {id: 140,  label: 'IVP', x: 811, y: 208},
        {id: 141,  label: 'LON', x: 894, y: 209},
        {id: 142,  label: 'ASS', x: 946, y: 208},
        {id: 143,  label: 'IBP', x: 853, y: 228},
        {id: 144,  label: 'GAR', x: 515, y: 245},
        {id: 145,  label: 'PGN', x: 769, y: 241},
        {id: 146,  label: 'STIV', x: 810, y: 239},
        {id: 147,  label: 'CNO', x: 570, y: 263},
        {id: 148,  label: 'ARE', x: 666, y: 262},
        {id: 149,  label: 'GBM', x: 709, y: 263},
        {id: 150,  label: 'SAG', x: 947, y: 260},
        {id: 151,  label: 'KCL', x: 827, y: 272},
        {id: 152,  label: 'LNA', x: 923, y: 272},
        {id: 153,  label: 'PGS', x: 770, y: 285},
        {id: 154,  label: 'CAN', x: 610, y: 294},
        {id: 155,  label: 'SMS', x: 650, y: 294},
        {id: 156,  label: 'FRA', x: 862, y: 294},
        {id: 157,  label: 'CHV', x: 947, y: 292},
        {id: 158,  label: 'ISO2', x: 981, y: 292},
        {id: 159,  label: 'BIG', x: 555, y: 318},
        {id: 160,  label: 'CBA', x: 665, y: 331},
        {id: 161,  label: 'BTA', x: 769, y: 330},
        {id: 162,  label: 'MUA', x: 828, y: 313},
        {id: 163,  label: 'STIN', x: 827, y: 330},
        {id: 164,  label: 'JGI', x: 904, y: 313},
        {id: 165,  label: 'ITR2', x: 947, y: 314},
        {id: 166,  label: 'CBA', x: 679, y: 345, group: 'caixa_amarela'},
        {id: 167,  label: 'JNO', x: 629, y: 352, group: 'caixa_amarela'},
        {id: 168,  label: 'CCO', x: 727, y: 354},
        {id: 169,  label: 'CTN', x: 867, y: 359},
        {id: 170,  label: 'SQT', x: 683, y: 379},
        {id: 171,  label: 'PIL', x: 931, y: 379},
        {id: 172,  label: 'GAS2', x: 595, y: 355},
        {id: 173,  label: 'CIC', x: 701, y: 392},
        {id: 174,  label: 'DRO', x: 516, y: 400},
        {id: 175,  label: 'JOI', x: 626, y: 406},
        {id: 176,  label: 'GRL', x: 887, y: 419},
        {id: 177,  label: 'ARC', x: 923, y: 419},
        {id: 1777, x: 923, y: 424, shape: 'image', size: 2.5, image: 'consumidorlivre/simulador/app/img/icotermica.png'},
        {id: 178,  label: 'TDE', x: 516, y: 429},
        {id: 179,  label: 'UMB', x: 664, y: 437},
        {id: 180,  label: 'BLU', x: 585, y: 450},
        {id: 181,  label: 'PAL', x: 515, y: 462},
        {id: 182,  label: 'BLU', x: 575, y: 460, group: 'caixa_amarela'},
        {id: 183,  label: 'CSO', x: 745, y: 437},
        {id: 184,  label: 'UBR', x: 743, y: 455},
        {id: 185,  label: 'DJP', x: 787, y: 455},
        {id: 186,  label: 'REP', x: 840, y: 437},
        {id: 187,  label: 'CTL', x: 839, y: 455},
        {id: 188,  label: 'PFL', x: 930, y: 462},
        {id: 189,  label: 'ANA', x: 980, y: 23},
        {id: 190,  label: 'SIA2', x: 980, y: 56},
        {id: 191,  label: 'IMB', x: 982, y: 93},
        {id: 192,  label: 'CGT', x: 982, y: 138},
        {id: 193,  label: 'CAO', x: 982, y: 187},
        {id: 194,  label: 'INO', x: 981, y: 247},
        {id: 195,  label: 'ILS', x: 981, y: 323},
        {id: 196,  label: 'SMC', x: 981, y: 379},
        {id: 197,  label: 'GPS', x: 981, y: 461},
        {id: 198,  label: 'ICO', x: 516, y: 489},
        {id: 199,  label: 'ITJ', x: 585, y: 489}
    ]);
    $scope.edges = new vis.DataSet([
        {"from":1,"to":2,"id":"1","color":{"color":"red"}},
        {"from":2,"to":20,"id":"2","color":{"color":"green"}},
        {"from":2,"to":19,"id":"3","color":{"color":"green"}},
        {"from":18,"to":2,"id":"4","color":{"color":"green"}},
        {"from":1,"to":3,"id":"5","color":{"color":"red"}},
        {"from":3,"to":2,"id":"6","color":{"color":"red"}},
        {"from":16,"to":17,"id":"7","color":{"color":"green"}},
        {"from":17,"to":25,"id":"8","color":{"color":"green"}},
        {"from":25,"to":26,"id":"9","color":{"color":"green"}},
        {"from":19,"to":25,"id":"10","color":{"color":"green"}},
        {"from":18,"to":6,"id":"11","color":{"color":"green"}},
        {"from":5,"to":2,"id":"12","color":{"color":"green"}},
        {"from":6,"to":5,"id":"13","color":{"color":"green"}},
        {"from":4,"to":5,"id":"14","color":{"color":"green"}},
        {"from":4,"to":9,"id":"15","color":{"color":"green"}},
        {"from":5,"to":9,"id":"16","color":{"color":"green"}},
        {"from":4,"to":8,"id":"17","color":{"color":"green"}},
        {"from":8,"to":9,"id":"18","color":{"color":"green"}},
        {"from":9,"to":7,"id":"19","color":{"color":"green"}},
        {"from":7,"to":14,"id":"20","color":{"color":"green"}},
        {"from":20,"to":14,"id":"21","color":{"color":"green"}},
        {"from":13,"to":12,"id":"22","color":{"color":"green"}},
        {"from":12,"to":9,"id":"23","color":{"color":"green"}},
        {"from":8,"to":10,"id":"24","color":{"color":"green"}},
        {"from":11,"to":12,"id":"25","color":{"color":"green"}},
        {"from":12,"to":15,"id":"26","color":{"color":"green"}},
        {"from":15,"to":34,"id":"27","color":{"color":"green"}},
        {"from":32,"to":33,"id":"28","color":{"color":"red"}},
        {"from":33,"to":34,"id":"29","color":{"color":"green"}},
        {"from":14,"to":22,"id":"30","color":{"color":"green"}},
        {"from":22,"to":23,"id":"31","color":{"color":"green"}},
        {"from":23,"to":24,"id":"32","color":{"color":"green"}},
        {"from":20,"to":21,"id":"33","color":{"color":"green"}},
        {"from":21,"to":24,"id":"34","color":{"color":"green"}},
        {"from":27,"to":24,"id":"35","color":{"color":"green"}},
        {"from":27,"to":28,"id":"36","color":{"color":"green"}},
        {"from":28,"to":26,"id":"37","color":{"color":"green"}},
        {"from":17,"to":108,"id":"38","color":{"color":"green"}},
        {"from":108,"to":26,"id":"39","color":{"color":"green"}},
        {"from":34,"to":35,"id":"40","color":{"color":"green"}},
        {"from":23,"to":35,"id":"41","color":{"color":"green"}},
        {"from":23,"to":48,"id":"42","color":{"color":"green"}},
        {"from":37,"to":36,"id":"43","color":{"color":"green"}},
        {"from":23,"to":59,"id":"44","color":{"color":"green"}},
        {"from":36,"to":35,"id":"45","color":{"color":"green"}},
        {"from":48,"to":59,"id":"46","color":{"color":"green"}},
        {"from":36,"to":67,"id":"47","color":{"color":"green"}},
        {"from":48,"to":67,"id":"48","color":{"color":"green"}},
        {"from":59,"to":47,"id":"49","color":{"color":"green"}},
        {"from":46,"to":62,"id":"50","color":{"color":"green"}},
        {"from":46,"to":34,"id":"51","color":{"color":"green"}},
        {"from":34,"to":45,"id":"52","color":{"color":"green"}},
        {"from":45,"to":47,"id":"53","color":{"color":"green"}},
        {"from":43,"to":45,"id":"54","color":{"color":"green"}},
        {"from":43,"to":34,"id":"55","color":{"color":"green"}},
        {"from":38,"to":44,"id":"56","color":{"color":"red"}},
        {"from":44,"to":60,"id":"57","color":{"color":"red"}},
        {"from":43,"to":60,"id":"58","color":{"color":"green"}},
        {"from":60,"to":47,"id":"59","color":{"color":"green"}},
        {"from":47,"to":62,"id":"60","color":{"color":"green"}},
        {"from":59,"to":60,"id":"61","label":"xxxx","color":{"color":"red"},"label":"xxxx","font":{"size":6,"strokeWidth":0,"color":"rgb(122,112,186)","background":"black"}},
        {"from":26,"to":30,"id":"62","color":{"color":"green"}},
        {"from":28,"to":31,"id":"63","color":{"color":"green"}},
        {"from":31,"to":56,"id":"64","color":{"color":"green"}},
        {"from":30,"to":52,"id":"65","color":{"color":"green"}},
        {"from":49,"to":52,"id":"66","color":{"color":"green"}},
        {"from":53,"to":52,"id":"67","color":{"color":"green"}},
        {"from":54,"to":52,"id":"68","color":{"color":"green"}},
        {"from":50,"to":52,"id":"69","color":{"color":"green"}},
        {"from":29,"to":52,"id":"70","color":{"color":"green"}},
        {"from":29,"to":50,"id":"71","color":{"color":"green"}},
        {"from":37,"to":50,"id":"72","color":{"color":"green"}},
        {"from":24,"to":51,"id":"73","color":{"color":"green"}},
        {"from":24,"to":83,"id":"74","color":{"color":"green"}},
        {"from":37,"to":59,"id":"75","color":{"color":"green"}},
        {"from":61,"to":62,"id":"76","color":{"color":"green"}},
        {"from":61,"to":66,"id":"77","color":{"color":"green"}},
        {"from":66,"to":67,"id":"78","color":{"color":"green"}},
        {"from":62,"to":67,"id":"79","color":{"color":"green"}},
        {"from":67,"to":59,"id":"80","color":{"color":"green"}},
        {"from":55,"to":50,"id":"81","color":{"color":"green"}},
        {"from":55,"to":58,"id":"82","color":{"color":"green"}},
        {"from":50,"to":57,"id":"83","color":{"color":"green"}},
        {"from":57,"to":65,"id":"84","color":{"color":"green"}},
        {"from":59,"to":51,"id":"85","color":{"color":"green"}},
        {"from":126,"to":127,"id":"86","color":{"color":"red"}},
        {"from":110,"to":108,"id":"87","color":{"color":"green"}},
        {"from":110,"to":109,"id":"88","color":{"color":"green"}},
        {"from":109,"to":108,"id":"89","color":{"color":"green"}},
        {"from":109,"to":111,"id":"90","color":{"color":"green"}},
        {"from":111,"to":112,"id":"91","color":{"color":"green"}},
        {"from":112,"to":109,"id":"92","color":{"color":"green"}},
        {"from":111,"to":118,"id":"93","color":{"color":"green"}},
        {"from":123,"to":128,"id":"94","color":{"color":"green"}},
        {"from":127,"to":2,"id":"95","color":{"color":"red"}},
        {"from":127,"to":128,"id":"96","color":{"color":"red"}},
        {"from":128,"to":137,"id":"97","color":{"color":"red"}},
        {"from":128,"to":129,"id":"98","color":{"color":"red"}},
        {"from":129,"to":113,"id":"99","color":{"color":"red"}},
        {"from":113,"to":114,"id":"100","color":{"color":"red"}},
        {"from":112,"to":117,"id":"101","color":{"color":"green"}},
        {"from":112,"to":113,"id":"102","color":{"color":"green"}},
        {"from":113,"to":119,"id":"103","color":{"color":"green"}},
        {"from":113,"to":115,"id":"104","color":{"color":"green"}},
        {"from":115,"to":120,"id":"105","color":{"color":"green"}},
        {"from":120,"to":119,"id":"106","color":{"color":"green"}},
        {"from":115,"to":116,"id":"107","color":{"color":"green"}},
        {"from":116,"to":121,"id":"108","color":{"color":"green"}},
        {"from":121,"to":124,"id":"109","color":{"color":"green"}},
        {"from":124,"to":131,"id":"110","color":{"color":"purple"}},
        {"from":132,"to":109,"id":"111","color":{"color":"green"}},
        {"from":128,"to":140,"id":"112","color":{"color":"red"}},
        {"from":140,"to":113,"id":"113","color":{"color":"red"}},
        {"from":132,"to":130,"id":"114","color":{"color":"green"}},
        {"from":133,"to":130,"id":"115","color":{"color":"green"}},
        {"from":133,"to":135,"id":"116","color":{"color":"green"}},
        {"from":132,"to":135,"id":"117","color":{"color":"green"}},
        {"from":135,"to":141,"id":"118","color":{"color":"green"}},
        {"from":130,"to":141,"id":"119","color":{"color":"green"}},
        {"from":138,"to":193,"id":"120","color":{"color":"green"}},
        {"from":193,"to":192,"id":"121","color":{"color":"green"}},
        {"from":192,"to":191,"id":"122","color":{"color":"green"}},
        {"from":124,"to":125,"id":"123","color":{"color":"green"}},
        {"from":125,"to":191,"id":"124","color":{"color":"green"}},
        {"from":191,"to":190,"id":"125","color":{"color":"green"}},
        {"from":190,"to":122,"id":"126","color":{"color":"green"}},
        {"from":122,"to":189,"id":"127","color":{"color":"green"}},
        {"from":189,"to":190,"id":"128","color":{"color":"green"}},
        {"from":116,"to":189,"id":"129","color":{"color":"green"}},
        {"from":142,"to":141,"id":"130","color":{"color":"red"}},
        {"from":141,"to":140,"id":"131","color":{"color":"red"}},
        {"from":141,"to":143,"id":"132","color":{"color":"green"}},
        {"from":141,"to":152,"id":"133","color":{"color":"green"}},
        {"from":152,"to":142,"id":"134","color":{"color":"green"}},
        {"from":142,"to":150,"id":"135","color":{"color":"green"}},
        {"from":150,"to":157,"id":"136","color":{"color":"green"}},
        {"from":193,"to":194,"id":"137","color":{"color":"green"}},
        {"from":158,"to":194,"id":"138","color":{"color":"green"}},
        {"from":195,"to":158,"id":"139","color":{"color":"purple"}},
        {"from":156,"to":141,"id":"140","color":{"color":"green"}},
        {"from":157,"to":156,"id":"141","color":{"color":"green"}},
        {"from":165,"to":164,"id":"142","color":{"color":"green"}},
        {"from":164,"to":156,"id":"143","color":{"color":"green"}},
        {"from":156,"to":151,"id":"144","color":{"color":"green"}},
        {"from":151,"to":145,"id":"145","color":{"color":"green"}},
        {"from":146,"to":140,"id":"146","color":{"color":"green"}},
        {"from":156,"to":162,"id":"147","color":{"color":"green"}},
        {"from":151,"to":162,"id":"148","color":{"color":"green"}},
        {"from":145,"to":153,"id":"149","color":{"color":"green"}},
        {"from":149,"to":148,"id":"150","color":{"color":"red"}},
        {"from":137,"to":148,"id":"151","color":{"color":"red"}},
        {"from":148,"to":140,"id":"152","color":{"color":"red"}},
        {"from":164,"to":162,"id":"153","color":{"color":"green"}},
        {"from":163,"to":161,"id":"154","color":{"color":"red"}},
        {"from":161,"to":153,"id":"155","color":{"color":"green"}},
        {"from":127,"to":134,"id":"156","color":{"color":"red"}},
        {"from":134,"to":147,"id":"157","color":{"color":"red"}},
        {"from":147,"to":139,"id":"158","color":{"color":"green"}},
        {"from":147,"to":148,"id":"159","color":{"color":"red"}},
        {"from":136,"to":147,"id":"160","color":{"color":"green"}},
        {"from":127,"to":93,"id":"161","color":{"color":"red"}},
        {"from":56,"to":147,"id":"162","color":{"color":"green"}},
        {"from":147,"to":64,"id":"163","color":{"color":"red"}},
        {"from":144,"to":64,"id":"164","color":{"color":"green"}},
        {"from":56,"to":64,"id":"165","color":{"color":"green"}},
        {"from":64,"to":63,"id":"166","color":{"color":"green"}},
        {"from":85,"to":63,"id":"167","color":{"color":"green"}},
        {"from":154,"to":155,"id":"168","color":{"color":"green"}},
        {"from":155,"to":148,"id":"169","color":{"color":"green"}},
        {"from":109,"to":148,"id":"170","color":{"color":"green"}},
        {"from":148,"to":161,"id":"171","color":{"color":"red"}},
        {"from":164,"to":161,"id":"172","color":{"color":"green"}},
        {"from":169,"to":171,"id":"173","color":{"color":"green"}},
        {"from":171,"to":196,"id":"174","color":{"color":"green"}},
        {"from":169,"to":161,"id":"175","color":{"color":"green"}},
        {"from":171,"to":161,"id":"176","color":{"color":"green"}},
        {"from":168,"to":161,"id":"177","color":{"color":"green"}},
        {"from":160,"to":161,"id":"178","color":{"color":"green"}},
        {"from":155,"to":160,"id":"179","color":{"color":"green"}},
        {"from":148,"to":160,"id":"180","color":{"color":"green"}},
        {"from":64,"to":159,"id":"181","color":{"color":"red"}},
        {"from":58,"to":87,"id":"182","color":{"color":"green"}},
        {"from":65,"to":84,"id":"183","color":{"color":"green"}},
        {"from":55,"to":93,"id":"184","color":{"color":"green"}},
        {"from":83,"to":67,"id":"185","color":{"color":"green"}},
        {"from":66,"to":68,"id":"186","color":{"color":"green"}},
        {"from":68,"to":67,"id":"187","color":{"color":"green"}},
        {"from":70,"to":67,"id":"188","color":{"color":"yellow"}},
        {"from":69,"to":70,"id":"189","color":{"color":"yellow"}},
        {"from":73,"to":67,"id":"190","color":{"color":"green"}},
        {"from":73,"to":72,"id":"191","color":{"color":"green"}},
        {"from":147,"to":93,"id":"192","color":{"color":"red"}},
        {"from":159,"to":172,"id":"193","color":{"color":"green"}},
        {"from":159,"to":174,"id":"194","color":{"color":"green"}},
        {"from":159,"to":102,"id":"195","color":{"color":"green"}},
        {"from":174,"to":178,"id":"196","color":{"color":"yellow"}},
        {"from":181,"to":178,"id":"197","color":{"color":"yellow"}},
        {"from":181,"to":159,"id":"198","color":{"color":"green"}},
        {"from":172,"to":181,"id":"199","color":{"color":"green"}},
        {"from":180,"to":172,"id":"200","color":{"color":"green"}},
        {"from":180,"to":159,"id":"201","color":{"color":"green"}},
        {"from":147,"to":180,"id":"202","color":{"color":"red"}},
        {"from":160,"to":180,"id":"203","color":{"color":"red"}},
        {"from":167,"to":160,"id":"204","color":{"color":"green"}},
        {"from":87,"to":99,"id":"205","color":{"color":"green"}},
        {"from":197,"to":196,"id":"206","color":{"color":"green"}},
        {"from":188,"to":197,"id":"207","color":{"color":"green"}},
        {"from":177,"to":176,"id":"208","color":{"color":"green"}},
        {"from":186,"to":176,"id":"209","color":{"color":"green"}},
        {"from":196,"to":187,"id":"210","color":{"color":"green"}},
        {"from":187,"to":188,"id":"211","color":{"color":"green"}},
        {"from":185,"to":186,"id":"212","color":{"color":"green"}},
        {"from":187,"to":160,"id":"213","color":{"color":"red"}},
        {"from":187,"to":185,"id":"214","color":{"color":"green"}},
        {"from":187,"to":184,"id":"215","color":{"color":"green"}},
        {"from":185,"to":184,"id":"216","color":{"color":"green"}},
        {"from":184,"to":179,"id":"217","color":{"color":"green"}},
        {"from":179,"to":160,"id":"218","color":{"color":"green"}},
        {"from":170,"to":179,"id":"219","color":{"color":"green"}},
        {"from":173,"to":179,"id":"220","color":{"color":"green"}},
        {"from":170,"to":168,"id":"221","color":{"color":"green"}},
        {"from":173,"to":168,"id":"222","color":{"color":"green"}},
        {"from":168,"to":176,"id":"223","color":{"color":"green"}},
        {"from":171,"to":168,"id":"224","color":{"color":"green"}},
        {"from":167,"to":175,"id":"225","color":{"color":"green"}},
        {"from":175,"to":160,"id":"226","color":{"color":"green"}},
        {"from":175,"to":180,"id":"227","color":{"color":"green"}},
        {"from":167,"to":180,"id":"228","color":{"color":"green"}},
        {"from":199,"to":180,"id":"229","color":{"color":"green"}},
        {"from":198,"to":181,"id":"230","color":{"color":"yellow"}},
        {"from":107,"to":102,"id":"231","color":{"color":"green"}},
        {"from":181,"to":102,"id":"232","color":{"color":"green"}},
        {"from":106,"to":102,"id":"233","color":{"color":"green"}},
        {"from":101,"to":102,"id":"234","color":{"color":"green"}},
        {"from":99,"to":102,"id":"235","color":{"color":"green"}},
        {"from":93,"to":84,"id":"236","color":{"color":"green"}},
        {"from":93,"to":50,"id":"237","color":{"color":"green"}},
        {"from":93,"to":92,"id":"238","color":{"color":"green"}},
        {"from":92,"to":91,"id":"239","color":{"color":"green"}},
        {"from":91,"to":90,"id":"240","color":{"color":"green"}},
        {"from":93,"to":80,"id":"241","color":{"color":"red"}},
        {"from":80,"to":59,"id":"242","color":{"color":"red"}},
        {"from":97,"to":93,"id":"243","color":{"color":"green"}},
        {"from":86,"to":90,"id":"244","color":{"color":"green"}},
        {"from":77,"to":88,"id":"245","color":{"color":"green"}},
        {"from":86,"to":77,"id":"246","color":{"color":"green"}},
        {"from":96,"to":90,"id":"247","color":{"color":"green"}},
        {"from":90,"to":89,"id":"248","color":{"color":"black"}},
        {"from":103,"to":100,"id":"249","color":{"color":"green"}},
        {"from":100,"to":80,"id":"250","color":{"color":"green"}},
        {"from":80,"to":67,"id":"251","color":{"color":"green"}},
        {"from":73,"to":80,"id":"252","color":{"color":"green"}},
        {"from":78,"to":80,"id":"253","color":{"color":"green"}},
        {"from":74,"to":80,"id":"254","color":{"color":"green"}},
        {"from":74,"to":71,"id":"255","color":{"color":"green"}},
        {"from":71,"to":66,"id":"256","color":{"color":"green"}},
        {"from":81,"to":71,"id":"257","color":{"color":"green"}},
        {"from":81,"to":105,"id":"258","color":{"color":"green"}},
        {"from":81,"to":100,"id":"259","color":{"color":"green"}},
        {"from":81,"to":80,"id":"260","color":{"color":"green"}},
        {"from":79,"to":81,"id":"261","color":{"color":"blue"}},
        {"from":76,"to":81,"id":"262","color":{"color":"blue"}},
        {"from":74,"to":81,"id":"263","color":{"color":"blue"}},
        {"from":75,"to":74,"id":"264","color":{"color":"blue"}},
        {"from":75,"to":76,"id":"265","color":{"color":"blue"}},
        {"from":183,"to":179,"id":"266","color":{"color":"green"}},
        {"from":183,"to":185,"id":"267","color":{"color":"green"}},
        {"from":59,"to":127,"id":"268","color":{"color":"red"}},
        {"from":80,"to":77,"id":"269","color":{"color":"green"}},
        {"from":80,"to":97,"id":"270","color":{"color":"green"}},
        {"from":40,"to":12,"id":"271","color":{"color":"green"}},
        {"from":43,"to":42,"id":"272","color":{"color":"green"}},
        {"from":34,"to":39,"id":"273","color":{"color":"green"}},
        {"from":41,"to":43,"id":"274","color":{"color":"green"}}
    ]);
    var container = document.getElementById('mynetwork');
    var width = 100;
    var height = 100;
    var options = {
        width: width + '%',
        height: height + '%',
        nodes: {
            color: 'rgba(255,255,255,0.0)',
            shadow: false,
            labelHighlightBold: true,
            font: {
                color: 'white',
                background: 'black',
                size: 8,
                face: 'arial',
                align: 'center'
            }
        },
        edges: {
            width: 2,
            color: {
                color:'white',
                highlight:'white',
                hover: 'grey',
                opacity:1.0
            },
            smooth: {
                enabled: false
            }
        },
        groups: {
            caixa_amarela: {
                color: {background:'black',border:'yellow'},
                shape: 'box',
                margin: 2,
                shapeProperties: {borderRadius: 0}
            },
            eolica: {
                color: 'rgba(255,255,255,0.0)',
                shadow: false,
                labelHighlightBold: true,
                font: {
                    color: 'white',
                    background: 'black',
                    size: 8,
                    face: 'arial',
                    align: 'center'
                }
            },
            geracao: {
                color: {
                    background:'black'
                },
                shape: 'box',
                margin: 1,
                font: {
                    color: 'rgb(122,112,186)',
                    background: 'black',
                    size: 5,
                    face: 'arial',
                    align: 'center'
                }
            },
            pisca: {
                color: {
                    background:'black'
                },
                shape: 'box',
                margin: 1,
                font: {
                    color: 'rgb(178, 166, 247)',
                    background: 'black',
                    size: 6,
                    face: 'arial',
                    align: 'center'
                }
            }
        },
        physics: false,
        interaction: {
            dragNodes: false,
            zoomView: true,
            dragView: true
        },
        manipulation: {
            enabled: false
        }    
    };
    var data = {
        nodes: $scope.nodes,
        edges: $scope.edges
    };
    
    var network = new vis.Network(container, data, options);
    
    network.fit();
    
    $timeout( function(){
        network.moveTo({
            position: {x:125, y:200},
            scale: 2.7,
            animation: {
                duration: 2000
            }
        });
        $timeout(function() {
            $scope.nodes.remove(1)
            $scope.nodes.remove(2)
            $scope.nodes.remove(3)
            $scope.nodes.remove(4)
            $scope.nodes.remove(44444)
            $scope.nodes.remove(5)
            $scope.nodes.remove(6)
            $scope.nodes.remove(8)
            $scope.nodes.remove(10)
            $scope.nodes.remove(13)
            $scope.nodes.remove(14)
            $scope.nodes.remove(16)
            $scope.nodes.remove(17)
            $scope.nodes.remove(18)
            $scope.nodes.remove(19)
            $scope.nodes.remove(20)
            $scope.nodes.remove(21)
            $scope.nodes.remove(22)
            $scope.nodes.remove(23)
            $scope.nodes.remove(24)
            $scope.nodes.remove(25)
            $scope.nodes.remove(26)
            $scope.nodes.remove(27)
            $scope.nodes.remove(28)
            $scope.nodes.remove(29)
            $scope.nodes.remove(30)
            $scope.nodes.remove(31)
            $scope.nodes.remove(36)
            $scope.nodes.remove(37)
            $scope.nodes.remove(48)
            $scope.nodes.remove(49)
            $scope.nodes.remove(50)
            $scope.nodes.remove(51)
            $scope.nodes.remove(52)
            $scope.nodes.remove(53)
            $scope.nodes.remove(54)
            $scope.nodes.remove(55)
            $scope.nodes.remove(56)
            $scope.nodes.remove(57)
            $scope.nodes.remove(58)
            $scope.nodes.remove(61)
            $scope.nodes.remove(63)
            $scope.nodes.remove(64)
            $scope.nodes.remove(65)
            $scope.nodes.remove(66)
            $scope.nodes.remove(67)
            $scope.nodes.remove(68)
            $scope.nodes.remove(69)
            $scope.nodes.remove(70)
            $scope.nodes.remove(71)
            $scope.nodes.remove(72)
            $scope.nodes.remove(722)
            $scope.nodes.remove(73)
            $scope.nodes.remove(74)
            $scope.nodes.remove(75)
            $scope.nodes.remove(76)
            $scope.nodes.remove(77)
            $scope.nodes.remove(78)
            $scope.nodes.remove(79)
            $scope.nodes.remove(80)
            $scope.nodes.remove(81)
            $scope.nodes.remove(82)
            $scope.nodes.remove(83)
            $scope.nodes.remove(84)
            $scope.nodes.remove(85)
            $scope.nodes.remove(86)
            $scope.nodes.remove(87)
            $scope.nodes.remove(88)
            $scope.nodes.remove(89)
            $scope.nodes.remove(899)
            $scope.nodes.remove(90)
            $scope.nodes.remove(91)
            $scope.nodes.remove(92)
            $scope.nodes.remove(93)
            $scope.nodes.remove(94)
            $scope.nodes.remove(944)
            $scope.nodes.remove(95)
            $scope.nodes.remove(955)
            $scope.nodes.remove(96)
            $scope.nodes.remove(966)
            $scope.nodes.remove(97)
            $scope.nodes.remove(98)
            $scope.nodes.remove(99)
            $scope.nodes.remove(100)
            $scope.nodes.remove(101)
            $scope.nodes.remove(1011)
            $scope.nodes.remove(102)
            $scope.nodes.remove(103)
            $scope.nodes.remove(104)
            $scope.nodes.remove(105)
            $scope.nodes.remove(106)
            $scope.nodes.remove(1066)
            $scope.nodes.remove(107)
            $scope.nodes.remove(1077)
            $scope.nodes.remove(108)
            $scope.nodes.remove(109)
            $scope.nodes.remove(110)
            $scope.nodes.remove(111)
            $scope.nodes.remove(112)
            $scope.nodes.remove(113)
            $scope.nodes.remove(114)
            $scope.nodes.remove(115)
            $scope.nodes.remove(116)
            $scope.nodes.remove(117)
            $scope.nodes.remove(118)
            $scope.nodes.remove(119)
            $scope.nodes.remove(120)
            $scope.nodes.remove(121)
            $scope.nodes.remove(122)
            $scope.nodes.remove(123)
            $scope.nodes.remove(124)
            $scope.nodes.remove(125)
            $scope.nodes.remove(126)
            $scope.nodes.remove(127)
            $scope.nodes.remove(128)
            $scope.nodes.remove(129)
            $scope.nodes.remove(130)
            $scope.nodes.remove(131)
            $scope.nodes.remove(132)
            $scope.nodes.remove(133)
            $scope.nodes.remove(134)
            $scope.nodes.remove(135)
            $scope.nodes.remove(136)
            $scope.nodes.remove(137)
            $scope.nodes.remove(138)
            $scope.nodes.remove(139)
            $scope.nodes.remove(140)
            $scope.nodes.remove(141)
            $scope.nodes.remove(142)
            $scope.nodes.remove(143)
            $scope.nodes.remove(144)
            $scope.nodes.remove(145)
            $scope.nodes.remove(146)
            $scope.nodes.remove(147)
            $scope.nodes.remove(148)
            $scope.nodes.remove(149)
            $scope.nodes.remove(150)
            $scope.nodes.remove(151)
            $scope.nodes.remove(152)
            $scope.nodes.remove(153)
            $scope.nodes.remove(154)
            $scope.nodes.remove(155)
            $scope.nodes.remove(156)
            $scope.nodes.remove(157)
            $scope.nodes.remove(158)
            $scope.nodes.remove(159)
            $scope.nodes.remove(160)
            $scope.nodes.remove(161)
            $scope.nodes.remove(162)
            $scope.nodes.remove(163)
            $scope.nodes.remove(164)
            $scope.nodes.remove(165)
            $scope.nodes.remove(166)
            $scope.nodes.remove(167)
            $scope.nodes.remove(168)
            $scope.nodes.remove(169)
            $scope.nodes.remove(170)
            $scope.nodes.remove(171)
            $scope.nodes.remove(172)
            $scope.nodes.remove(173)
            $scope.nodes.remove(174)
            $scope.nodes.remove(175)
            $scope.nodes.remove(176)
            $scope.nodes.remove(177)
            $scope.nodes.remove(1777)
            $scope.nodes.remove(178)
            $scope.nodes.remove(179)
            $scope.nodes.remove(180)
            $scope.nodes.remove(181)
            $scope.nodes.remove(182)
            $scope.nodes.remove(183)
            $scope.nodes.remove(184)
            $scope.nodes.remove(185)
            $scope.nodes.remove(186)
            $scope.nodes.remove(187)
            $scope.nodes.remove(188)
            $scope.nodes.remove(189)
            $scope.nodes.remove(190)
            $scope.nodes.remove(191)
            $scope.nodes.remove(192)
            $scope.nodes.remove(193)
            $scope.nodes.remove(194)
            $scope.nodes.remove(195)
            $scope.nodes.remove(196)
            $scope.nodes.remove(197)
            $scope.nodes.remove(198)
            $scope.nodes.remove(199)
            $scope.nodes.remove(1333)
            $scope.nodes.update([{id:61,label:'oo', x: 999, y: 213}]);
            $scope.nodes.update([{id:80,label:'oo', x: 999, y: 274}]);
            $scope.nodes.update([{id:7,label:'oo', x: 999, y: 0}]);
            $scope.nodes.update([{id:35,label:'oo', x: 999, y: 152}]);
        }, 3000);
    }, 1000 );


    $scope.iniciaVariaveis = function()
    {
        $scope.limiteviolado=0;
        $scope.impactoNaLinha = {
            CSVPA: 0.7,
            CMRO2: 0.7,
            CQ138: 0.6,
            CQ69: 0.58,
            CLIV2: 0.21
        };

        var objdata = new Date();
        $scope.entraumavez=0;
        $scope.contMin=0;
        $scope.cInstalada = {
            CSVPA: 582.79,
            //CSVPA: 983,
            CMRO2: 207,
            CQ138: 108,
            CQ69: 64,
            CLIV2: 217.2
        };
        $scope.gLimite = {
            CSVPA: $scope.cInstalada.CSVPA,
            CMRO2: $scope.cInstalada.CMRO2,
            CQ138: $scope.cInstalada.CQ138,
            CQ69: $scope.cInstalada.CQ69,
            CLIV2: $scope.cInstalada.CLIV2
        };
        $scope.gReal = {
            CSVPA: $scope.randomiza(300,$scope.cInstalada.CSVPA-400),
            CMRO2: $scope.randomiza(20,$scope.cInstalada.CMRO2-150),
            CQ138: $scope.randomiza(50,$scope.cInstalada.CQ138-50),
            CQ69: $scope.randomiza(20,$scope.cInstalada.CQ69-20),
            CLIV2: $scope.randomiza(100,$scope.cInstalada.CLIV2-100)
        };


        $scope.contgImportacao=parseInt($scope.randomiza(0,299));
        
        $scope.gImportacao = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 360, 360, 360, 360, 360, 360, 360, 360, 360, 360, 360, 360, 360, 360, 360, 360, 360, 360, 360, 360, 360, 360, 360, 360, 360, 360, 360, 360, 360, 360, 360, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 240, 240, 240, 240, 240, 240, 240, 240, 240, 240, 240, 240, 240, 240, 240, 240, 240, 240, 240, 240, 240, 240, 240, 240, 240, 240, 240, 240, 240, 240, 240, 240, 240, 240, 240, 240, 240, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 400, 400, 400, 400, 400, 400, 400, 400, 400, 400, 400, 400, 400, 400, 400, 400, 400, 400, 400, 400, 400, 400, 400, 400, 400, 400, 400, 400, 400, 400, 400, 400, 400, 400, 400, 400, 400, 400, 400, 400, 400, 400, 400, 400, 400, 400, 400, 400, 400, 400, 400, 400, 400, 400, 400, 400, 400, 400, 400, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        
        $scope.contlistaEqps=parseInt($scope.randomiza(0,15));
        $scope.listaEqps=["LT 230 kV Povo Novo / Quinta", "TF1 525/15/13,8 kV SE Marmeleiro 2", "CS1 SE Marmeleiro 2 15 kV", "CS2 SE Marmeleiro 2 15 kV", "LT 230 kV Alegrete 2 / Livramento 2", "LT 230 kV Camaquã 3 / Guaíba 2", "LT 230 kV Camaquã 3 / Nova Santa Rita", "LT 230 kV Camaquã 3 / Pelotas 3", "LT 230 kV Camaquã 3 / Povo Novo", "LT 230 kV Pelotas 3 / Quinta", "LT 230 kV Presidente Médici / Quinta", "LT 230 kV Presidente Médici / Santa Cruz 1", "LT 230 kV Bagé 2 / Livramento 2", "LT 230 kV Bagé 2 / Presidente Médici", "LT 230 kV Pelotas 3 / Presidente Médici", "UG5 UTE Candiota III"];
       
        //$scope.conteqpIndisponivel=0;
        $scope.conteqpIndisponivel=parseInt($scope.randomiza(0,299));
        $scope.eqpIndisponivel = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1];

        var hora = ((objdata.getHours()) < 10) ? '0' + (objdata.getHours()) : (objdata.getHours());
        var minuto = ((objdata.getMinutes()) < 10) ? '0' + (objdata.getMinutes()) : (objdata.getMinutes());
        var segundo = ((objdata.getSeconds()) < 10) ? '0' + (objdata.getSeconds()) : (objdata.getSeconds());
        $scope.horaminutoseg = hora+":"+minuto+":"+segundo;
        $scope.horaminutoseginicial = hora+":"+minuto+":"+segundo;

        $scope.fluxoNaLinha = (($scope.impactoNaLinha.CSVPA*$scope.gReal.CSVPA)+($scope.impactoNaLinha.CMRO2*$scope.gReal.CMRO2)+($scope.impactoNaLinha.CQ138*$scope.gReal.CQ138)+($scope.impactoNaLinha.CQ69*$scope.gReal.CQ69)+($scope.impactoNaLinha.CLIV2*$scope.gReal.CLIV2)).toFixed(2);

        
        $scope.sliderCSVPA=0;
        $scope.sliderCMRO2=0;
        $scope.sliderCQ138=0;
        $scope.sliderCQ69=0;
        $scope.sliderCLIV2=0;

        $scope.contTabela=0;
        $scope.tabelahorario = [];
        $scope.tabelaevento = [];

        $scope.fatorAleatorio = {
            CSVPA: 0,
            CMRO2: 0,
            CQ138: 0,
            CQ69: 0,
            CLIV2: 0
        };

        $scope.CMRO2Participa=1;
        //0 - participa igualmente
        //1 - priorizado
        $scope.CortePorpocional=1;
        //1 - Carga Instalada
        //0 - Geração

        $scope.corteAcionado=0;

        mudarLabelEolicasPisca();
    }
    $scope.randomiza = function(max,min)
    {
        var random = (Math.random() * (+max - +min) + +min).toFixed(2);; 
        return String(random);
    }
    var mudarLabelEolicasPisca = function() {
        //console.log($scope.contMin,$scope.contgReal.CSVPA,$scope.contgReal.CMRO2,$scope.contgReal.CQ138,$scope.contgReal.CQ69,$scope.contgReal.CLIV2,$scope.contgReal.Melo,$scope.contfRealLinha);
        if($scope.gReal.CSVPA>$scope.gLimite.CSVPA) {$scope.fatorAleatorio.CSVPA = $scope.randomiza(0.95,1)}
        else {$scope.fatorAleatorio.CSVPA = $scope.randomiza(1,1.1)}
        if($scope.gReal.CMRO2>$scope.gLimite.CMRO2) {$scope.fatorAleatorio.CMRO2 = $scope.randomiza(0.95,1)}
        else {$scope.fatorAleatorio.CMRO2 = $scope.randomiza(0.95,1.1)}
        if($scope.gReal.CQ138>$scope.gLimite.CQ138) {$scope.fatorAleatorio.CQ138 = $scope.randomiza(0.95,1)}
        else {$scope.fatorAleatorio.CQ138 = $scope.randomiza(0.95,1.1)}
        if($scope.gReal.CQ69>$scope.gLimite.CQ69) {$scope.fatorAleatorio.CQ69 = $scope.randomiza(0.95,1)}
        else {$scope.fatorAleatorio.CQ69 = $scope.randomiza(0.95,1.1)}
        if($scope.gReal.CLIV2>$scope.gLimite.CLIV2) {$scope.fatorAleatorio.CLIV2 = $scope.randomiza(0.95,1)}
        else {$scope.fatorAleatorio.CLIV2 = $scope.randomiza(0.95,1.1)}
        
        if($scope.corteAcionado==1) {
            $scope.fatorAleatorio.CSVPA = 1;
            $scope.fatorAleatorio.CMRO2 = 1;
            $scope.fatorAleatorio.CQ138 = 1;
            $scope.fatorAleatorio.CQ69 = 1;
            $scope.fatorAleatorio.CLIV2 = 1;
            $scope.corteAcionado=0;
        }
    
        $scope.gReal = {
            CSVPA: ($scope.gReal.CSVPA*$scope.fatorAleatorio.CSVPA).toFixed(2),
            CMRO2: ($scope.gReal.CMRO2*$scope.fatorAleatorio.CMRO2).toFixed(2),
            CQ138: ($scope.gReal.CQ138*$scope.fatorAleatorio.CQ138).toFixed(2),
            CQ69: ($scope.gReal.CQ69*$scope.fatorAleatorio.CQ69).toFixed(2),
            CLIV2: ($scope.gReal.CLIV2*$scope.fatorAleatorio.CLIV2).toFixed(2)
        };

        $scope.fluxoNaLinha = (($scope.impactoNaLinha.CSVPA*$scope.gReal.CSVPA)+($scope.impactoNaLinha.CMRO2*$scope.gReal.CMRO2)+($scope.impactoNaLinha.CQ138*$scope.gReal.CQ138)+($scope.impactoNaLinha.CQ69*$scope.gReal.CQ69)+($scope.impactoNaLinha.CLIV2*$scope.gReal.CLIV2)).toFixed(2);
        
        var objdata = new Date();
        var dia = ((objdata.getDate()) < 10) ? '0' + (objdata.getDate()) : (objdata.getDate());
        var mes = ((objdata.getMonth() + 1) < 10) ? '0' + (objdata.getMonth() + 1) : (objdata.getMonth() + 1);
        var ano = objdata.getFullYear();
        var hora = ((objdata.getHours()) < 10) ? '0' + (objdata.getHours()) : (objdata.getHours());
        var minuto = ((objdata.getMinutes()) < 10) ? '0' + (objdata.getMinutes()) : (objdata.getMinutes());
        var segundo = ((objdata.getSeconds()) < 10) ? '0' + (objdata.getSeconds()) : (objdata.getSeconds());
        $scope.horaminutoseg = hora+":"+minuto+":"+segundo;

        $scope.minutocorrente = dia+"/"+mes+"/"+ano+"  "+$scope.horaminutoseg;
        //CSVPA
        $scope.nodes.update([{id:388,label: $scope.gReal.CSVPA.toString(), group: 'pisca'}]);
        //CMRO2
        $scope.nodes.update([{id:444,label: $scope.gReal.CMRO2.toString(), group: 'pisca'}]);
        //CQ138
        $scope.nodes.update([{id:422,label: $scope.gReal.CQ138.toString(), group: 'pisca'}]);
        //CQ69
        $scope.nodes.update([{id:411,label: $scope.gReal.CQ69.toString(), group: 'pisca'}]);
        //CLIV2
        $scope.nodes.update([{id:400,label: $scope.gReal.CLIV2.toString(), group: 'pisca'}]);
        //MLO
        $scope.nodes.update([{id:322,label: $scope.gImportacao[$scope.contgImportacao].toString(), group: 'pisca'}]);
        //linha
        $scope.edges.update([{id:61,label: $scope.fluxoNaLinha.toString(),"color":{"color":"red"},"font":{"face":"arial","size":7,"strokeWidth":0,"color":"rgb(178, 166, 247)","background":"black"}}]);
        //epqindiponivel
        if(($scope.eqpIndisponivel[$scope.conteqpIndisponivel]==1) && ($scope.entraumavez==0)) {
            $scope.entraumavez=1;
            $scope.estado_eqp = "Indisponível";
            $scope.minuto_eqp = $scope.horaminutoseg;
            $scope.descricao_eqp = $scope.listaEqps[$scope.contlistaEqps];
            $scope.registraEvento(3);
        } else if ($scope.eqpIndisponivel[$scope.conteqpIndisponivel]==0) {
            if(($scope.descricao_eqp!=null)&&($scope.estado_eqp!="")) {$scope.registraEvento(4);}
            $scope.entraumavez=0;
            $scope.estado_eqp = "";
            $scope.minuto_eqp = "";
            $scope.descricao_eqp = "";
        }
        
        $scope.limiteNaLinha=$scope.verificaLimiteLinha($scope.gImportacao[$scope.contgImportacao],$scope.eqpIndisponivel[$scope.conteqpIndisponivel]);
        
        if ($scope.fluxoNaLinha>$scope.limiteNaLinha) {
            if ($scope.gImportacao[$scope.contgImportacao]>0) {
                $scope.piscaZerarImportacao();
            } else {
                $scope.paraPiscaZerarImportacao();
            }
            $scope.setData();
            if($scope.limiteviolado==0) {$scope.registraEvento(5);}
            $scope.limiteviolado=1;
            alertify.dismissAll();
            alertify.set('notifier','position', 'bottom-right');
            alertify.error('Limite do fluxo da linha violado.');
        } else {
            $scope.limiteviolado=0;
            $scope.paraPiscaZerarImportacao();
        }

        $scope.atualizaGrafico();
        
        if($scope.contgImportacao==299) {$scope.contgImportacao=0;}
        else {$scope.contgImportacao=$scope.contgImportacao+1;}
        
        if($scope.conteqpIndisponivel==299) {$scope.conteqpIndisponivel=0;}
        else {$scope.conteqpIndisponivel=$scope.conteqpIndisponivel+1;}

        
        $timeout(mudarLabelEolicas, 1000);
    }
    var mudarLabelEolicas = function () {
        //CSVPA
        $scope.nodes.update([{id:388, group: 'geracao'}]);
        //CMRO2
        $scope.nodes.update([{id:444, group: 'geracao'}]);
        //CQ138
        $scope.nodes.update([{id:422, group: 'geracao'}]);
        //CQ69
        $scope.nodes.update([{id:411, group: 'geracao'}]);
        //CLIV2
        $scope.nodes.update([{id:400, group: 'geracao'}]);
        //MLO
        $scope.nodes.update([{id:322, group: 'geracao'}]);
        //linha
        $scope.edges.update([{id:61,"color":{"color":"red"},"font":{"face":"arial","size":6,"strokeWidth":0,"color":"rgb(122,112,186)","background":"black"}}]);
        
        $timeout(mudarLabelEolicasPisca, 9000);
    }
    $scope.verificaLimiteLinha=function(geracaoMelo,eqpIndis) {
        if((geracaoMelo==0)&&(eqpIndis==0)) {
            //op normal
            return 560;
        }
        if((geracaoMelo==0)&&(eqpIndis==1)) {
            //indisponibilidade de eqp
            return 330;  
        }
        if((geracaoMelo<350)&&(eqpIndis==0)) {
            //op normal+importação<350
            return 510;
        }
        if((geracaoMelo>=350)&&(eqpIndis==0)) {
            //op normal+importação>350
            return 540;
        }
        if((geracaoMelo>0)&&(eqpIndis==1)) {
            //indisponibilidade de eqp+importação
            return 300;
        }
    }
    $scope.atualizaGrafico = function() {
        myChartGeracao.data.labels.push($scope.horaminutoseg);
        myChartFluxo.data.labels.push($scope.horaminutoseg);
        myChartGeracao.data.datasets[0].data.push($scope.gReal.CSVPA);
        myChartGeracao.data.datasets[1].data.push($scope.gReal.CMRO2);
        myChartGeracao.data.datasets[2].data.push($scope.gReal.CQ138);
        myChartGeracao.data.datasets[3].data.push($scope.gReal.CQ69);
        myChartGeracao.data.datasets[4].data.push($scope.gReal.CLIV2);
        myChartGeracao.data.datasets[5].data.push($scope.gImportacao[$scope.contgImportacao]);
        myChartFluxo.data.datasets[0].data.push($scope.fluxoNaLinha);
        myChartFluxo.data.datasets[1].data.push($scope.limiteNaLinha);
        myChartGeracao.update();
        myChartFluxo.update();
        $scope.atualizaSliders();
    }
    
    $scope.corteManual = function() {
        if ($scope.fluxoNaLinha<$scope.limiteNaLinha) {
            alertify.success('Limite da LT não está sendo violado.');
        }
        if ($scope.gImportacao[$scope.contgImportacao]>0) {
            alertify.success('Ação prioritaria de zerar importação necessária antes do ajuste de geração.');
        }
        if (($scope.fluxoNaLinha>$scope.limiteNaLinha)&&($scope.gImportacao[$scope.contgImportacao]==0)) {
            $scope.registraEvento(1);

            if ($scope.sliderCSVPA>0)
            {
                $scope.gReal.CSVPA = $scope.gReal.CSVPA-$scope.sliderCSVPA;
                if($scope.gReal.CSVPA<0){$scope.gReal.CSVPA=0;}
                $scope.gLimite.CSVPA = $scope.gReal.CSVPA;
            }
            if ($scope.sliderCMRO2>0)
            {
                $scope.gReal.CMRO2 = $scope.gReal.CMRO2-$scope.sliderCMRO2;
                if($scope.gReal.CMRO2<0){$scope.gReal.CMRO2=0;}
                $scope.gLimite.CMRO2 = $scope.gReal.CMRO2;
            }
            if ($scope.sliderCQ138>0)
            {
                $scope.gReal.CQ138 = $scope.gReal.CQ138-$scope.sliderCQ138;
                if($scope.gReal.CQ138<0){$scope.gReal.CQ138=0;}
                $scope.gLimite.CQ138 = $scope.gReal.CQ138;
            }
            if ($scope.sliderCQ69>0)
            {
                $scope.gReal.CQ69 = $scope.gReal.CQ69-$scope.sliderCQ69;
                if($scope.gReal.CQ69<0){$scope.gReal.CQ69=0;}
                $scope.gLimite.CQ69 = $scope.gReal.CQ69;
            }
            if ($scope.sliderCLIV2>0)
            {
                $scope.gReal.CLIV2 = $scope.gReal.CLIV2-$scope.sliderCLIV2;
                if($scope.gReal.CLIV2<0){$scope.gReal.CLIV2=0;}
                $scope.gLimite.CLIV2 = $scope.gReal.CLIV2;
            }

            $scope.fluxoNaLinha = (($scope.impactoNaLinha.CSVPA*$scope.gReal.CSVPA)+($scope.impactoNaLinha.CMRO2*$scope.gReal.CMRO2)+($scope.impactoNaLinha.CQ138*$scope.gReal.CQ138)+($scope.impactoNaLinha.CQ69*$scope.gReal.CQ69)+($scope.impactoNaLinha.CLIV2*$scope.gReal.CLIV2)).toFixed(2);
            $scope.registraEvento(6);
            $scope.registraEvento(2);
            $scope.sliderCSVPA=0
            $scope.sliderCMRO2=0
            $scope.sliderCQ138=0
            $scope.sliderCQ69=0
            $scope.sliderCLIV2=0;    

            $scope.corteAcionado=1;

            alertify.success('Corte Realizado. Fluxo na linha atualizado.');
        }
    }
    $scope.zerarImportacao = function() {
        if($scope.gImportacao[$scope.contgImportacao]==0) {
            alertify.success('Não está ocorrendo importação de energia');
        } else {
            $scope.gImportacao = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
            alertify.success('Importação Zerada. Limite de fluxo na linha atualizado.');
            $scope.registraEvento(0);
        }
    }
    $scope.atualizaSliders = function() {
        
        $("#sliderCSVPA")
            .slider({
                orientation: "vertical",
                range: "min",
                min: 0,
                max: $scope.gReal.CSVPA,
                value: $scope.sliderCSVPA
            })
            .slider("float")
            .slider("pips", {
                rest: "label",
                step: "50",
                first: "label",
                last: "label"
            })
            .on("slidechange", function() {
                $scope.sliderCSVPA=$('#sliderCSVPA').slider("value");
                $(".valorsliderCSVPA").val($('#sliderCSVPA').slider("value"));
                $scope.atualizaGraficoPizza();
            });
    
        $("#sliderCMRO2")
            .slider({
                orientation: "vertical",
                range: "min",
                min: 0,
                max: $scope.gReal.CMRO2,
                value: $scope.sliderCMRO2
            })
            .slider("float")
            .slider("pips", {
                rest: "label",
                step: "50",
                first: "label",
                last: "label"
            })
            .on("slidechange", function() {
                $scope.sliderCMRO2=$('#sliderCMRO2').slider("value");
                $(".valorsliderCMRO2").val($('#sliderCMRO2').slider("value"));
                $scope.atualizaGraficoPizza();
            });

        $("#sliderCQ138")
            .slider({
                orientation: "vertical",
                range: "min",
                min: 0,
                max: $scope.gReal.CQ138,
                value: $scope.sliderCQ138
            })
            .slider("float")
           .slider("pips", {
                rest: "label",
                step: "50",
                first: "label",
                last: "label"
            })
            .on("slidechange", function() {
                $scope.sliderCQ138=$('#sliderCQ138').slider("value");
                $(".valorsliderCQ138").val($('#sliderCQ138').slider("value"));
                $scope.atualizaGraficoPizza();
            });

        $("#sliderCQ69")
            .slider({
                orientation: "vertical",
                range: "min",
                min: 0,
                max: $scope.gReal.CQ69,
                value: $scope.sliderCQ69
            })
            .slider("float")
            .slider("pips", {
                rest: "label",
                step: "20",
                first: "label",
                last: "label"
            })
            .on("slidechange", function() {
                $scope.sliderCQ69=$('#sliderCQ69').slider("value");
                $(".valorsliderCQ69").val($('#sliderCQ69').slider("value"));
                $scope.atualizaGraficoPizza();
            });

        $("#sliderCLIV2")
            .slider({
                orientation: "vertical",
                range: "min",
                min: 0,
                max: $scope.gReal.CLIV2,
                value: $scope.sliderCLIV2
            })
            .slider("float")
            .slider("pips", {
                rest: "label",
                step: "50",
                first: "label",
                last: "label"
            })
            .on("slidechange", function() {
                $scope.sliderCLIV2=$('#sliderCLIV2').slider("value");
                $(".valorsliderCLIV2").val($('#sliderCLIV2').slider("value"));
                $scope.atualizaGraficoPizza();
            });
    }

    $scope.setData = function(){

        $http({
            method: 'POST',
            url: 'https://gese.florianopolis.ifsc.edu.br/consumidorlivre/simulador/app/model/otimizacaooctave/setData.php',
            headers: {'Content-Type': undefined},
            data:  { 
                "GeracaoConjuntoCSVPA": $scope.gReal.CSVPA,
                "GeracaoConjuntoCMRO2": $scope.gReal.CMRO2,
                "GeracaoConjuntoCQ138": $scope.gReal.CQ138,
                "GeracaoConjuntoCQ69": $scope.gReal.CQ69,
                "GeracaoConjuntoCLIV2": $scope.gReal.CLIV2,
                "CMRO2Participa": $scope.CMRO2Participa,
                "CortePorpocional": $scope.CortePorpocional,
                "FluxoNaLinha": $scope.fluxoNaLinha,
                "LimiteFluxoNaLinha": $scope.limiteNaLinha
            }
            }).then(
            function successCallback(response) {
                console.log(response.data);
                $scope.getData();
            },
            function errorCallback() {
               console.log('erro setData');
               alertify.success('Erro.');
            });
     }
     
    $scope.getData = function()
    {
        $http({
            method: 'GET',
            url: 'https://gese.florianopolis.ifsc.edu.br/consumidorlivre/simulador/app/model/getCorteNasUsinas.php'
        }).then(
        function successCallback(response) {
            $scope.CorteNasUsinas = {
                CMRO2: response.data[0].toFixed(2),
                CSVPA: response.data[1].toFixed(2),
                CQ138: response.data[2].toFixed(2),
                CQ69: response.data[3].toFixed(2),
                CLIV2: response.data[4].toFixed(2)
            };
            //console.log($scope.CorteNasUsinas);
            $scope.sliderCSVPA=($scope.CorteNasUsinas.CSVPA*1).toFixed(2);
            $scope.sliderCMRO2=($scope.CorteNasUsinas.CMRO2*1).toFixed(2);
            $scope.sliderCQ138=($scope.CorteNasUsinas.CQ138*1).toFixed(2);
            $scope.sliderCQ69=($scope.CorteNasUsinas.CQ69*1).toFixed(2);
            $scope.sliderCLIV2=($scope.CorteNasUsinas.CLIV2*1).toFixed(2);
            
            $scope.ajusteOtimizadoCSVPA=(($scope.gReal.CSVPA)-($scope.CorteNasUsinas.CSVPA)).toFixed(2);
            $scope.ajusteOtimizadoCMRO2=(($scope.gReal.CMRO2)-($scope.CorteNasUsinas.CMRO2)).toFixed(2);
            $scope.ajusteOtimizadoCQ138=(($scope.gReal.CQ138)-($scope.CorteNasUsinas.CQ138)).toFixed(2);
            $scope.ajusteOtimizadoCQ69=(($scope.gReal.CQ69)-($scope.CorteNasUsinas.CQ69)).toFixed(2);
            $scope.ajusteOtimizadoCLIV2=(($scope.gReal.CLIV2)-($scope.CorteNasUsinas.CLIV2)).toFixed(2);
            $scope.atualizaSliders();
        },
        function errorCallback() {
            console.log('erro getCorteNasUsinas');
            alertify.set('notifier','position', 'bottom-left');
            alertify.success('Erro.');
        });

        $http({
            method: 'GET',
            url: 'https://gese.florianopolis.ifsc.edu.br/consumidorlivre/simulador/app/model/getLimitePosCorte.php'
        }).then(
        function successCallback(response) {
            $scope.LimitePosCorte = {
                CMRO2: response.data[0].toFixed(2),
                CSVPA: response.data[1].toFixed(2),
                CQ138: response.data[2].toFixed(2),
                CQ69: response.data[3].toFixed(2),
                CLIV2: response.data[4].toFixed(2)
            };
            //console.log($scope.LimitePosCorte);
        },
        function errorCallback() {
            console.log('erro getLimitePosCorte');
            alertify.success('Erro.');
        });
    }
    $scope.registraEvento = function (assunto) {
        var objdata = new Date();
        var hora = ((objdata.getHours()) < 10) ? '0' + (objdata.getHours()) : (objdata.getHours());
        var minuto = ((objdata.getMinutes()) < 10) ? '0' + (objdata.getMinutes()) : (objdata.getMinutes());
        var segundo = ((objdata.getSeconds()) < 10) ? '0' + (objdata.getSeconds()) : (objdata.getSeconds());
        $scope.tabelahorario[$scope.contTabela] = hora+":"+minuto+":"+segundo;
        if(assunto==0) {
            $scope.tabelaevento[$scope.contTabela]="Interrompe Importação de Energia";
        } else if(assunto==1) {
            $scope.tabelahorario[$scope.contTabela] = hora+":"+minuto+":"+segundo;
            $scope.tabelaevento[$scope.contTabela]="Fluxo Anterior na LT [MW]: "+$scope.fluxoNaLinha;
            $scope.contTabela=$scope.contTabela+1;
            $scope.tabelahorario[$scope.contTabela] = hora+":"+minuto+":"+segundo;
            $scope.tabelaevento[$scope.contTabela]="Corte de Geração dos Conjuntos [MW]: \n | CSVPA: "+$scope.sliderCSVPA+" | CMRO2: "+$scope.sliderCMRO2+" | CQ138: "+$scope.sliderCQ138+" | CQ69: "+$scope.sliderCQ69+" | CLIV2: "+$scope.sliderCLIV2+" | \n";
            var somaCorte=parseFloat($scope.sliderCSVPA+$scope.sliderCMRO2+$scope.sliderCQ138+$scope.sliderCQ69+$scope.sliderCLIV2).toFixed(2);
            $scope.tabelaevento[$scope.contTabela]=$scope.tabelaevento[$scope.contTabela]+"Corte Total Geração dos Conjuntos [MW]: "+somaCorte;
        } else if(assunto==2) {
            $scope.tabelaevento[$scope.contTabela]="Sugestão de Corte de Geração [MW]: \n | CSVPA: "+($scope.CorteNasUsinas.CSVPA*1).toFixed(2)+" | CMRO2: "+($scope.CorteNasUsinas.CMRO2*1).toFixed(2)+" | CQ138: "+($scope.CorteNasUsinas.CQ138*1).toFixed(2)+" | CQ69: "+($scope.CorteNasUsinas.CQ69*1).toFixed(2)+" | CLIV2: "+($scope.CorteNasUsinas.CLIV2*1).toFixed(2)+" | \n";
            var somaSugestaoCorte=(parseFloat($scope.CorteNasUsinas.CSVPA)+parseFloat($scope.CorteNasUsinas.CMRO2)+parseFloat($scope.CorteNasUsinas.CQ138)+parseFloat($scope.CorteNasUsinas.CQ69)+parseFloat($scope.CorteNasUsinas.CLIV2)).toFixed(2);
            $scope.tabelaevento[$scope.contTabela]=$scope.tabelaevento[$scope.contTabela]+"Total da Sugestão de Corte de Geração [MW]: "+somaSugestaoCorte;
        } else if(assunto==3) {
            $scope.tabelaevento[$scope.contTabela]="Equipamento "+$scope.descricao_eqp+" -> Indisponível";
        } else if(assunto==4) {
            $scope.tabelaevento[$scope.contTabela]="Equipamento "+$scope.descricao_eqp+" -> Disponível";
        } else if(assunto==5) {
            $scope.tabelaevento[$scope.contTabela]="Limite da LT PNO/NSR Violado";
        } else if(assunto==6) {
            var fluxoRemanescente=(parseFloat($scope.limiteNaLinha)-parseFloat($scope.fluxoNaLinha)).toFixed(2);
            $scope.tabelaevento[$scope.contTabela]="Fluxo na LT Após Corte [MW]: "+$scope.fluxoNaLinha+"\n Fluxo Limite na LT [MW]: "+parseFloat($scope.limiteNaLinha).toFixed(2)+"\n Diferença [MW]: "+fluxoRemanescente;
        }
        
        $scope.contTabela=$scope.contTabela+1;
    }
    $scope.abreModal = function() {
        $("#modal").dialog();
    }
    $scope.abreModalArtigo = function() {
        $( "#modalArtigo" ).dialog({
            height: 550,
            width: 900
        });
    }
    $scope.abreModalManual = function() {
        $( "#modalManual" ).dialog({
            height: 550,
            width: 900
        });
    }
    $scope.configs = function() {
        var checkBoxporpocional0 = document.getElementById("porpocional0");
        var checkBoxmarmeleiro10 = document.getElementById("marmeleiro0");
        if (checkBoxporpocional0.checked == true){
            $scope.CortePorpocional=0;
        } else {
            $scope.CortePorpocional=1;
        }
        if (checkBoxmarmeleiro10.checked == true){
            $scope.CMRO2Participa=0;
        } else {
            $scope.CMRO2Participa=1;
        }
        $("#modal").dialog("close");
    }
    $scope.gerarRelatorio = function () {

        var canvasImg = document.getElementById("myChartGeracao").toDataURL("image/jpg");
        var canvasImg2 = document.getElementById("myChartFluxo").toDataURL("image/jpg");
        
        var doc = new jsPDF()

        var tMargin=15;
        var bMargin=15;
        var lMargin=15;
        var rMargin=15;
        var pdfInMM=210;
        
        var logo_ifsc = "data:image/png;base64,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";
        doc.addImage(logo_ifsc, 'png', lMargin, 3);
        var logo_gese = "data:image/png;base64,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";
        doc.addImage(logo_gese, 'png', 173, 1);


        doc.autoTable({
            startY: 10+tMargin,
            styles: { fillColor: [255, 255, 255] },
            columnStyles: { 0: { halign: 'center', textColor: [0, 0, 0], fillColor: [255, 255, 255], fontSize: 22 } },
            margin: { top: 10 },
            body: [
                ['Relatório'],
            ],
        })

        var objdata = new Date();
        var dia = ((objdata.getDate()) < 10) ? '0' + (objdata.getDate()) : (objdata.getDate());
        var mes = ((objdata.getMonth() + 1) < 10) ? '0' + (objdata.getMonth() + 1) : (objdata.getMonth() + 1);
        var ano = objdata.getFullYear();
        var hora = ((objdata.getHours()) < 10) ? '0' + (objdata.getHours()) : (objdata.getHours());
        var minuto = ((objdata.getMinutes()) < 10) ? '0' + (objdata.getMinutes()) : (objdata.getMinutes());
        var paragraph =  dia+"/"+mes+"/"+ano+" "+hora+":"+minuto;
        doc.autoTable({
            startY: 20+tMargin,
            styles: { fillColor: [255, 255, 255] },
            columnStyles: { 0: { halign: 'center', textColor: [0, 0, 0], fillColor: [255, 255, 255], fontSize: 14 } },
            margin: { top: 10 },
            body: [
                [paragraph],
            ],
        })


        //doc.text(pdfInMM/2, 18+tMargin, paragraph,'center');
        //paragraph="O presente relatório ilustra um resumo da simulação realizada. Agrega o histórico de dados relevantes juntamente com as ações todas pelo usuário. Esta ferramenta foi desenvolvida por meio de projeto de pequisa com apoio do IFSC.";
        //var lines =doc.splitTextToSize(paragraph, (pdfInMM-lMargin-rMargin));
        //doc.text((pdfInMM/2)-(rMargin/2),30+tMargin,lines,'center');

        doc.autoTable({
            startY: 30+tMargin,
            styles: { fillColor: [255, 255, 255] },
            columnStyles: { 0: { halign: 'center', textColor: [0, 0, 0], fillColor: [255, 255, 255], fontSize:13 } },
            margin: { top: 10 },
            body: [
                ['O presente relatório ilustra um resumo da simulação realizada. Agrega o histórico de dados relevantes juntamente com as ações todas pelo usuário. Esta ferramenta foi desenvolvida por meio de projeto de pequisa com apoio do IFSC.'],
            ],
        })

        doc.autoTable({
            startY: 50+tMargin,
            styles: { fillColor: [255, 255, 255] },
            columnStyles: { 0: { halign: 'center', textColor: [0, 0, 0], fillColor: [255, 255, 255], fontSize:13 } },
            margin: { top: 10 },
            body: [
                ['Autores: Fabricio Takigawa, Matheus N. S. M. de Lima e Werik Ramos.'],
            ],
        })

        doc.autoTable({
            startY: 60+tMargin,
            styles: { fillColor: [255, 255, 255] },
            columnStyles: { 0: { halign: 'left', textColor: [0, 0, 0], fillColor: [255, 255, 255], fontSize:12 } },
            margin: { top: 10 },
            body: [
                ['Os gráficos a seguir apresentam os valores de geração dos conjuntos junto com a importação de Melo e o fluxo na linha com seu limite, durante a simulação realizada.'],
            ],
        })
    
        doc.addImage(canvasImg, 'JPEG', 10, 73+tMargin, 343/3.7, 224/3.7);
        doc.addImage(canvasImg2, 'JPEG', 110, 73+tMargin, 343/3.7, 224/3.7);
        
        doc.autoTable({
            startY: 150+tMargin,
            styles: { fillColor: [255, 255, 255] },
            columnStyles: { 0: { halign: 'left', textColor: [0, 0, 0], fillColor: [255, 255, 255], fontSize:12 } },
            margin: { top: 10 },
            body: [
                ['A tabela a seguir exibe o horário dos principais eventos ocorridos durante a simulação e a descrição do evento.'],
            ],
        })

        doc.autoTable({
            startY: 170+tMargin,
            head: cabecaTabela(),
            body: corpoTabela(),
            rowPageBreak: 'auto',
            headStyles: {
                fillColor: [0, 0, 0],
                halign: 'center',
                valign: 'middle',
            },          
            columnStyles: {
                horario: {
                    halign: 'center',
                    valign: 'middle',
                },
                evento: {
                    halign: 'center',
                    valign: 'middle',
                },
              }
          })

        doc.save('Relatorio_Simulador.pdf');
    }
    function cabecaTabela () {
        return [
          { horario: 'Horário', evento: 'corte' },
        ];
    }
    function corpoTabela () {
        var body = [];
        body.push({
            horario: $scope.horaminutoseginicial,
            evento: "Indisponibilidade das Lógicas do Esquema Especial da Área 525 kV da Região Sul",
          })
        for (var j = 0; j <= $scope.contTabela ; j++) {
          body.push({
            horario: $scope.tabelahorario[j],
            evento: $scope.tabelaevento[j],
          })
        }
        return body;
    }
    
    (function($) {
        $.fn.inputFilter = function(inputFilter) {
          return this.on("input keydown keyup mousedown mouseup select contextmenu drop", function() {
            if (inputFilter(this.value)) {
              this.oldValue = this.value;
              this.oldSelectionStart = this.selectionStart;
              this.oldSelectionEnd = this.selectionEnd;
            } else if (this.hasOwnProperty("oldValue")) {
              this.value = this.oldValue;
              this.setSelectionRange(this.oldSelectionStart, this.oldSelectionEnd);
            } else {
              this.value = "";
            }
          });
        };
    }(jQuery));
    $(document).ready(function() {
        $(".sonumero").inputFilter(function(value) {
            return /^-?\d*[.]?\d*$/.test(value);
        });
    });
    
    $(".valorsliderCSVPA").change(function () {
        $("#sliderCSVPA").slider({value: $('.valorsliderCSVPA').val()});
    }).change();
    $(".valorsliderCMRO2").change(function () {
        $("#sliderCMRO2").slider({value: $('.valorsliderCMRO2').val()});
    }).change();
    $(".valorsliderCQ138").change(function () {
        $("#sliderCQ138").slider({value: $('.valorsliderCQ138').val()});
    }).change();
    $(".valorsliderCQ69").change(function () {
        $("#sliderCQ69").slider({value: $('.valorsliderCQ69').val()});
    }).change();
    $(".valorsliderCLIV2").change(function () {
        $("#sliderCLIV2").slider({value: $('.valorsliderCLIV2').val()});
    }).change();

    $scope.piscaZerarImportacao = function () {
        var element = document.getElementById("zeraimp");
        element.classList.add("brilho");
    }
    $scope.paraPiscaZerarImportacao = function () {
        var element = document.getElementById("zeraimp");
        element.classList.remove("brilho");
    }
    $scope.atualizaGraficoPizza = function () {
        myChartCorte.data.datasets[0].data=[
            $scope.sliderCSVPA,
            $scope.sliderCMRO2,
            $scope.sliderCQ138,
            $scope.sliderCQ69,
            $scope.sliderCLIV2
        ];
        myChartCorte.update();
    }
});