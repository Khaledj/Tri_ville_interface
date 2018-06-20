// Converts from degrees to radians.
Math.toRadians = function(degrees) {
  return degrees * Math.PI / 180;
};


function distanceFromGrenoble(city)
{

  var GrenobleLat = 45.166667;
  var GrenobleLong = 5.716667;
  var cityLat = city.latitude;
  var cityLong = city.longitude;

  var R = 6371; // metres
  var φ1 =Math.toRadians(GrenobleLat);
  var φ2 = Math.toRadians(cityLat);
  var Δφ = Math.toRadians(cityLat-GrenobleLat);
  var Δλ = Math.toRadians(cityLong-GrenobleLong);

  var a = Math.sin(Δφ/2) * Math.sin(Δφ/2) +
         Math.cos(φ1) * Math.cos(φ2) *
         Math.sin(Δλ/2) * Math.sin(Δλ/2);
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));

  var d = R * c;
  return d;
}

function swap(i,j) // Swap the values in array csvData
{
  let temp = csvData[i];
    csvData[i] = csvData[j];
    csvData[j] = temp;
    displayBuffer.push(['swap', i, j]); // Do not delete this line (for display)


}

function isLess(A,B) {
  displayBuffer.push(['compare', A, B]); // Do not delete this line (for display)
  if( A.dist < B.dist) {
    return true;
  }else{
    return false;
  }

}


function insertsort()
{

    for (let i = 1; i < csvData.length; i++) {
        for (let k = i; k > 0; k--) {
            if ( isLess(csvData[k],csvData[k - 1]) ){
                swap(k,k-1);
            }else{
                break;
            }
        }
    }

}
function selectionsort()
{

    for (let i = 0; i < csvData.length; i++) {
        let k = i;
        for (let j = i + 1; j <csvData.length; j++) {

            if ( isLess(csvData[j],csvData[k])) {
                k = j;
            }

        }
        swap(k, i);
    }
}
function bubblesort() {
    for (let i = 0; i < csvData.length; i++) {
        let swapped = false;

        for (let j = csvData.length - 1; j >= i + 1; j--) {
            if (isLess(csvData[j], csvData[j - 1])) {
                swap(j, j - 1);
                swapped = true;
            }
        }
        if (swapped == false) {
            return
        }

    }
}


function shellsort()
{
  console.log("implement me !");
}
function mergesort(data)
{
  console.log("implement me !");
}
function heapsort(data)
{
  console.log("implement me !");
}


function quicksort()
{
  let t = csvData.length-1;
  sort1(0,t);
}

function sort1(iDeb, iFin) {
    let rand = random(iDeb, iFin);
    swap(iDeb, rand);
    let k = iDeb;
    for (let i = iDeb+1; i <= iFin; i++) {
        if (isLess(csvData[i],csvData[iDeb])) {
            swap(++k, i);
        }
    }
    swap(iDeb, k);

    if( iDeb<k-1) {
        sort1(iDeb, k - 1);
    }
    if(k+1<=iFin) {
        sort1(k + 1, iFin);
    }

}


function random(min, max) {
    rand = Math.floor(Math.random() * (max - min) + min);
    return rand;
}

function quick3sort(data)
{
  console.log("implement me !");
}



var algorithms = {
  'insert': insertsort,
  'select': selectionsort,
  'bubble': bubblesort,
  'shell': shellsort,
  'merge': mergesort,
  'heap': heapsort,
  'quick': quicksort,
  'quick3': quick3sort
}

function sort(algo)
{
  if (!algorithms.hasOwnProperty(algo)) {
    throw 'Invalid algorithm ' + algo;
  }
  var sort_fn = algorithms[algo];
  sort_fn();
}
