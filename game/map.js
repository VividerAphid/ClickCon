//Simple map file to keep the runner thing less messy.
function testMap(){
	var map = [new planeto(0, 50, 50, '#fff', 10, [1,2,3]),
			new planeto(0, 200, 50, '#fff', 10, [0,3]),
			new planeto(0, 50, 200, '#fff', 10, [0,3]),
			new planeto(0, 200, 200, '#fff', 10, [0,1,2]),
			new planeto(0, 200, 300, '#fff', 10, [2,3]),
			new planeto(0, 50, 300, '#fff', 10, [2,4])];
	return map;
}
function prettySym(){
	var map = [new planeto(0, 1075,754, '#fff', 10, [4,36,56]), //0
			new planeto(0, 265,82, '#fff',  10, [5,37,57]),
			new planeto(0, 1075,82, '#fff',  10, [6,38,58]),
			new planeto(0, 265,754, '#fff',  10, [7,39,59]),
			new planeto(0, 987,740, '#fff',  10, [0,8,44,56,60]),
			new planeto(0, 353,96, '#fff',  10, [1,9,45,57,61]), //5
			new planeto(0, 987,96, '#fff',  10, [2,10,46,58,62]),
			new planeto(0, 353,740, '#fff',  10, [3,11,47,59,63]),
			new planeto(0, 912,716, '#fff',  10, [4,12,60]),
			new planeto(0, 428,120, '#fff',  10, [5,13,61]),
			new planeto(0, 912,120, '#fff',  10, [6,14,62]), //10
			new planeto(0, 428,716, '#fff',  10, [7,15,63]),
			new planeto(0, 864,673, '#fff',  10, [8,16,48,60]),
			new planeto(0, 476,163, '#fff',  10, [9,17,49,61]),
			new planeto(0, 864,163, '#fff',  10, [10,18,50,62]),
			new planeto(0, 476,673, '#fff',  10, [11,19,51,63]), //15
			new planeto(0, 791,584, '#fff',  10, [12,20,48,52]),
			new planeto(0, 549,252, '#fff',  10, [13,21,49,53]),
			new planeto(0, 791,252, '#fff',  10, [14,22,50,54]),
			new planeto(0, 549,584, '#fff',  10, [15,23,51,55]),
			new planeto(0, 760,488, '#fff',  10, [16,22,23,24,40,52]), //20
			new planeto(0, 580,348, '#fff',  10, [17,22,23,25,41,53]),
			new planeto(0, 760,348, '#fff',  10, [18,20,21,26,42,54]),
			new planeto(0, 580,488, '#fff',  10, [19,20,21,27,43,55]),
			new planeto(0, 846,460, '#fff',  10, [20,26,28,52]),
			new planeto(0, 494,376, '#fff',  10, [21,27,29,53]), //25
			new planeto(0, 846,376, '#fff',  10, [22,24,30,54]),
			new planeto(0, 494,460, '#fff',  10, [23,25,31,55]),
			new planeto(0, 949,486, '#fff',  10, [24,30,48,52,64]),
			new planeto(0, 391,350, '#fff',  10, [25,31,49,53,65]),
			new planeto(0, 949,350, '#fff',  10, [26,28,50,54,66]), //30
			new planeto(0, 391,486, '#fff',  10, [27,29,51,55,67]),
			new planeto(0, 1059,569, '#fff',  10, [36,44,64]),
			new planeto(0, 281,267, '#fff',  10, [37,45,65]),
			new planeto(0, 1059,267, '#fff',  10, [38,46,66]),
			new planeto(0, 281,569, '#fff',  10, [39,47,67]), //35
			new planeto(0, 1109,697, '#fff',  10, [0,32,44,56]),
			new planeto(0, 231,139, '#fff',  10, [1,33,45,57]),
			new planeto(0, 1109,139, '#fff',  10, [2,34,46,58]),
			new planeto(0, 231,697, '#fff',  10, [3,35,47,59]),
			new planeto(0, 696,441, '#fff',  10, [20,42,43]), //40
			new planeto(0, 644,395, '#fff',  10, [21,42,43]),
			new planeto(0, 696,395, '#fff',  10, [22,40,41]),
			new planeto(0, 644,441, '#fff',  10, [23,40,41]),
			new planeto(0, 996,641, '#fff',  10, [4,32,36,56,60,64]),
			new planeto(0, 344,195, '#fff',  10, [5,33,37,57,61,65]), //45
			new planeto(0, 996,195, '#fff',  10, [6,34,38,58,62,66]),
			new planeto(0, 344,641, '#fff',  10, [7,35,39,59,63,67]),
			new planeto(0, 913,568, '#fff',  10, [12,16,28,52,60,64]),
			new planeto(0, 427,268, '#fff',  10, [13,17,29,53,61,65]),
			new planeto(0, 913,268, '#fff',  10, [14,18,30,54,62,66]), //50
			new planeto(0, 427,568, '#fff',  10, [15,19,31,55,63,67]),
			new planeto(0, 832,528, '#fff',  10, [16,20,24,28,48]),
			new planeto(0, 508,308, '#fff',  10, [17,21,25,29,49]),
			new planeto(0, 832,308, '#fff',  10, [18,22,26,30,50]),
			new planeto(0, 508,528, '#fff',  10, [19,23,27,31,51]), //55
			new planeto(0, 1046,704, '#fff',  10, [0,4,36,44]),
			new planeto(0, 294,132, '#fff',  10, [1,5,37,45]),
			new planeto(0, 1046,132, '#fff',  10, [2,6,38,46]),
			new planeto(0, 294,704, '#fff',  10, [3,7,39,47]),
			new planeto(0, 939,646, '#fff',  10, [4,8,12,44,48,64]), //60
			new planeto(0, 401,190, '#fff',  10, [5,9,13,45,49,65]),
			new planeto(0, 939,190, '#fff',  10, [6,10,14,46,50,66]),
			new planeto(0, 401,646, '#fff',  10, [7,11,15,47,51,67]),
			new planeto(0, 974,561, '#fff',  10, [28,32,44,48,60]),
			new planeto(0, 366,275, '#fff',  10, [29,33,45,49,61]), //65
			new planeto(0, 974,275, '#fff',  10, [30,34,46,50,62]),
			new planeto(0, 366,561, '#fff',  10, [31,35,47,51,63])];
	return map;
}
function scatterBlob(){
	var map = [new planeto(0, 196,157, '#fff',  15, [16,19,21,32]),
			new planeto(0, 233,481, '#fff',  15, [16,17,18,21,30]),
			new planeto(0, 454,558, '#fff',  15, [11,23,29,30]),
			new planeto(0, 476,134, '#fff',  15, [19,20,28,32]),
			new planeto(0, 788,73, '#fff',  15, [7,14,15,20]),
			new planeto(0, 659,386, '#fff',  15, [15,22,28,29,31]),
			new planeto(0, 434,341, '#fff',  15, [16,28,29,30,32]),
			new planeto(0, 848,245, '#fff',  15, [4,14,15,27,31]),
			new planeto(0, 1096,231, '#fff',  15, [14,25,27]),
			new planeto(0, 1029,546, '#fff',  15, [12,13,24,25,26]),
			new planeto(0, 726,671, '#fff',  15, [22,23,24,33]),
			new planeto(0, 383,722, '#fff',  15, [2,23,30]),
			new planeto(0, 1075,736, '#fff',  15, [9,24,26]),
			new planeto(0, 913,452, '#fff',  15, [9,22,27,31]),
			new planeto(0, 1018,131, '#fff',  15, [4,7,8,27]),
			new planeto(0, 678,214, '#fff',  15, [4,5,7,20,28]),
			new planeto(0, 279,299, '#fff',  15, [0,1,6,21]),
			new planeto(0, 36,478, '#fff',  15, [1,18,21]),
			new planeto(0, 182,665, '#fff',  15, [1,17]),
			new planeto(0, 348,36, '#fff',  15, [0,3]),
			new planeto(0, 646,39, '#fff',  15, [3,4,15]),
			new planeto(0, 128,322, '#fff',  15, [0,1,16,17]),
			new planeto(0, 745,489, '#fff',  15, [5,10,13,24,29,31]),
			new planeto(0, 591,664, '#fff',  15, [2,10,11,29]),
			new planeto(0, 902,667, '#fff',  15, [9,10,12,22,33]),
			new planeto(0, 1174,430, '#fff',  15, [8,9,27]),
			new planeto(0, 1225,642, '#fff',  15, [9,12]),
			new planeto(0, 961,305, '#fff',  15, [7,8,13,14,25,31]),
			new planeto(0, 582,285, '#fff',  15, [3,5,6,15,29,32]),
			new planeto(0, 566,481, '#fff',  15, [2,5,6,22,23,28]),
			new planeto(0, 350,502, '#fff',  15, [1,2,6,11]),
			new planeto(0, 831,385, '#fff',  15, [5,7,13,22,27]),
			new planeto(0, 418,193, '#fff',  15, [0,3,6,28]),
			new planeto(0, 809,727, '#fff',  15, [10,24])];
	return map;
}

function praiseJibbers(){
	var map = [new planeto(0, 120, 22.5,  "#fff", 10,  [1,  2]),
			new planeto(0, 210, 15,  "#fff", 10,  [0, 2,  3]),
			new planeto(0, 180, 75,  "#fff", 10,  [0, 1, 3,  7]),
			new planeto(0, 277.5, 52.5,  "#fff", 10,  [1, 2,  4]), 
			new planeto(0, 337.5, 90,  "#fff", 10,  [3, 7, 8,  11]), 
			new planeto(0, 105, 165,  "#fff", 10,  [6,  9]), 
			new planeto(0, 202.5, 157.5,  "#fff", 10,  [5, 7, 9,  10]),
			new planeto(0, 270, 120,  "#fff", 10,  [2, 4, 6,  10]),
			new planeto(0, 435, 112.5,  "#fff", 10,  [4, 11, 12,  13]), 
			new planeto(0, 165, 210,  "#fff", 10,  [5, 6,  10]),
			new planeto(0, 240, 210,  "#fff", 10,  [6, 7, 9,  11]),
			new planeto(0, 315, 172.5,  "#fff", 10,  [4, 8, 10,  12]),
			new planeto(0, 412.5, 187.5,  "#fff", 10,  [8, 11, 13,  14]),
			new planeto(0, 510, 180,  "#fff", 10,  [8, 12, 14,  15]),
			new planeto(0, 472.5, 255,  "#fff", 10,  [12, 13, 15, 20,  21]), 
			new planeto(0, 577.5, 244.5,  "#fff", 10,  [13, 14,  21]),
			new planeto(0, 97.5, 375,  "#fff", 10,  [17]), 
			new planeto(0, 195, 397.5,  "#fff", 10,  [16,  18]),
			new planeto(0, 285, 375,  "#fff", 10,  [17, 19, 28, 38,  39]),
			new planeto(0, 352.5, 322.5,  "#fff", 10,  [18, 20,  28]),
			new planeto(0, 442.5, 315,  "#fff", 10,  [14, 19, 21, 28,  29]), 
			new planeto(0, 562.5, 322.5,  "#fff", 10,  [14, 15, 20, 22, 29,  30]),
			new planeto(0, 675, 345,  "#fff", 10,  [21, 30,  31]),
			new planeto(0, 795, 337.5,  "#fff", 10,  [31, 32,  33]),
			new planeto(0, 960, 337.5,  "#fff", 10,  [33, 34,  35]),
			new planeto(0, 1087.5, 292.5,  "#fff", 10,  [26, 27, 35, 36]),
			new planeto(0, 1155, 232.5,  "#fff", 10,  [25,  27]), 
			new planeto(0, 1200, 307.5,  "#fff", 10,  [25, 26, 36, 37]),
			new planeto(0, 412.5, 390,  "#fff", 10,  [18, 19, 20, 29, 39, 40]),
			new planeto(0, 510, 397.5,  "#fff", 10,  [20, 21, 28, 30, 40, 41]),
			new planeto(0, 607.5, 397.5,  "#fff", 10,  [21, 22, 29, 41, 42, 43]),
			new planeto(0, 735, 390,  "#fff", 10,  [22, 23, 32, 43,  57]),
			new planeto(0, 795, 420,  "#fff", 10,  [23, 31, 33,  44]),
			new planeto(0, 877.5, 405,  "#fff", 10,  [23, 24, 32, 34, 45]), 
			new planeto(0, 960, 420,  "#fff", 10,  [24, 33, 35,  46]), 
			new planeto(0, 1027.5, 405,  "#fff", 10,  [24, 25, 34, 36, 47, 48]),
			new planeto(0, 1117.5, 367.5,  "#fff", 10,  [25, 27, 35,  37]),
			new planeto(0, 1177.5, 390,  "#fff", 10,  [27, 36, 48,  49]), 
			new planeto(0, 277.5, 472.5,  "#fff", 10,  [18, 39,  52]), 
			new planeto(0, 367.5, 465,  "#fff", 10,  [18, 28, 38,  53]), 
			new planeto(0, 450, 450,  "#fff", 10,  [28, 29, 41,  53]), 
			new planeto(0, 525, 495,  "#fff", 10,  [29, 30, 40, 42, 54,  55]),
			new planeto(0, 615, 487.5,  "#fff", 10,  [30, 41, 55,  56]),
			new planeto(0, 675, 442.5,  "#fff", 10,  [30, 31,  56]),
			new planeto(0, 795, 510,  "#fff", 10,  [32, 45, 57,  58]),
			new planeto(0, 877.5, 525,  "#fff", 10,  [33, 44, 46, 58,  59]),
			new planeto(0, 960, 502.5,  "#fff", 10,  [34, 45, 47,  59]), 
			new planeto(0, 1027.5, 510,  "#fff", 10,  [35, 46, 48, 59, 60,  61]),
			new planeto(0, 1110, 450,  "#fff", 10,  [35, 37, 47,  49]),
			new planeto(0, 1170, 495,  "#fff", 10,  [37, 48, 61,  62]), 
			new planeto(0, 120, 592.5,  "#fff", 10,  [51]), 
			new planeto(0, 210, 577.5,  "#fff", 10,  [50,  52]), 
			new planeto(0, 300, 562.5,  "#fff", 10,  [38, 51, 53,  63]),
			new planeto(0, 412.5, 510,  "#fff", 10,  [39, 40, 52, 54,  63]), 
			new planeto(0, 472.5, 562.5,  "#fff", 10,  [41, 53, 55, 63, 64]), 
			new planeto(0, 577.5, 555,  "#fff", 10,  [41, 42, 54, 56, 64,  65]),
			new planeto(0, 675, 517.5,  "#fff", 10,  [42, 43, 55, 57,  66]), 
			new planeto(0, 735, 540,  "#fff", 10,  [31, 44, 56, 58,  66]), 
			new planeto(0, 795, 600,  "#fff", 10,  [44, 45,  57]), 
			new planeto(0, 960, 600,  "#fff", 10,  [45, 46,  47]), 
			new planeto(0, 1072.5, 607.5,  "#fff", 10,  [47, 61, 62,  67]), 
			new planeto(0, 1102.5, 540,  "#fff", 10,  [47, 49, 60,  62]), 
			new planeto(0, 1185, 577.5,  "#fff", 10,  [49, 60, 61,  67]), 
			new planeto(0, 375, 615,  "#fff", 10,  [52, 53, 54,  64]), 
			new planeto(0, 480, 637.5,  "#fff", 10,  [54, 55, 63, 65, 68,  69]),
			new planeto(0, 570, 622.5,  "#fff", 10,  [55, 64, 66,  69]),
			new planeto(0, 667.5, 600,  "#fff", 10,  [56, 57,  65]), 
			new planeto(0, 1147.5, 660,  "#fff", 10,  [60,  62]), 
			new planeto(0, 465, 712.5,  "#fff", 10,  [64, 69, 74,  75]), 
			new planeto(0, 577.5, 697.5,  "#fff", 10,  [64, 65, 68,  75]),
			new planeto(0, 82.5, 712.5,  "#fff", 10,  [71,  76]), 
			new planeto(0, 172.5, 735,  "#fff", 10,  [70, 72, 76,  77]), 
			new planeto(0, 232.5, 787.5,  "#fff", 10,  [71, 73,  77]), 
			new planeto(0, 315, 802.5,  "#fff", 10,  [72, 74, 78,  79]), 
			new planeto(0, 397.5, 772.5,  "#fff", 10,  [68, 73, 75, 79, 80]), 
			new planeto(0, 502.5, 780,  "#fff", 10,  [68, 69, 74,  80]),  
			new planeto(0, 120, 772.5,  "#fff", 10,  [70, 71,  77]),
			new planeto(0, 187.5, 825,  "#fff", 10,  [71, 72, 76, 78, 81]), 
			new planeto(0, 270, 855,  "#fff", 10,  [73, 77, 79,  83]), 
			new planeto(0, 382.5, 847.5,  "#fff", 10,  [73, 74, 78, 80]), 
			new planeto(0, 450, 832.5,  "#fff", 10,  [74, 75,  79]),
			new planeto(0, 142.5, 877.5,  "#fff", 10,  [77, 82, 83, 84]), 
			new planeto(0, 75, 915,  "#fff", 10,  [81,  84]), 
			new planeto(0, 202.5, 907.5,  "#fff", 10,  [78, 81, 84]), 
			new planeto(0, 135, 952.5,  "#fff", 10,  [81, 82, 83])];
	return map;
}