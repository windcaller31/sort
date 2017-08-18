function bubble_sort(a){
  for(var j=0;j<a.length;j++){
    for(var i=1;i<a.length;i++){
      if( a[i] < a[i-1] ){
        var tmp = a[i];
        a[i] = a[i-1];
        a[i-1] = tmp;
      }
    }
    console.log(a);
  }

}

bubble_sort( [8,5,0,1,3,4,6,3,2] );
