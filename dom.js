const div = document.createElement('div');
const p1 = document.createElement('p');
p1.id = 'count1';

const p2 = document.createElement('p');
p2.id = 'count2';

const p3 = document.createElement('p');
p3.id = 'info1';
const p4 = document.createElement('p');
p4.id = 'info2';

div.append(p1, p2, p3, p4)
document.body.append(div);