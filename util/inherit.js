function obj(o){
    function F(){}
    F.prototype = o;
    return new F();
}

function inheritPrototype(sub,super){
    let prototype = obj(super.prototype);       //�൱�ڿ�����һ���������
    prototype.constructor = sub;    ��ǿ����
    sub.prototype = prototype;      ָ������
}
