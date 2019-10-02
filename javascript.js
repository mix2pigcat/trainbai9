let a=parseInt(prompt('Nhap canh a:'));
let b=parseInt(prompt('Nhap canh b:'));
let c=parseInt(prompt('Nhap canh c:'));
if (a>0&&b>0&&c>0&&a+b>c&&b+c>a&&a+c>b){
    alert('a,b,c là cạnh của tam giác')
}else {
    alert('a,b,c không phải là cạnh của tam giác:')
}