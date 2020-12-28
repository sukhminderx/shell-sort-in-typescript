export class ShellSort {

    constructor(val: Array<number>) {
        console.log(val);
        this.sort(val);
        console.log(val);
    }

    /*
        start from h to last index
        compare it with index-h th el and swap if needed
        decrease index by h and compare el with that index and swap if needed
        so on
    */
    sort(a: Array<number>) {
        for(let h=a.length/2;h>=1;h=Math.floor(h/2)){
            for(let i=h;i<a.length;i++) {
                let previousIndex = i;
                let currentEl = a[i];
                while(currentEl<a[previousIndex-h] && previousIndex>=1) { // inner loop continues as previousIndex from v-1 to 1 and compares+replaces if needed
                    // hence, putting the right el at a[] element
                    a[previousIndex] = a[previousIndex-h];
                    previousIndex-=h;
                }
                a[previousIndex] = currentEl;
            }
        }
    }

}