// fn��������Ҫ��װ���¼��ص�, delay��ʱ��������ֵ
function throttle(fn, delay) {
  // lastΪ��һ�δ����ص���ʱ��, timer�Ƕ�ʱ��
  let last = 0, timer = null
  // ��throttle������������������
  
  return function () { 
    // ��������ʱ��this������
    let context = this
    // ��������ʱ����Ĳ���
    let args = arguments
    // ��¼���δ����ص���ʱ��
    let now = +new Date()
    
    // �ж��ϴδ�����ʱ��ͱ��δ�����ʱ����Ƿ�С��ʱ��������ֵ
    if (now - last < delay) {
    // ���ʱ����С�������趨��ʱ������ֵ����Ϊ���δ�����������һ���µĶ�ʱ��
       clearTimeout(timer)
       timer = setTimeout(function () {
          last = now
          fn.apply(context, args)
        }, delay)
    } else {
        // ���ʱ���������������趨��ʱ������ֵ���ǾͲ����ˣ��������Ҫ�������û�һ����Ӧ
        last = now
        fn.apply(context, args)
    }
  }
}

// ���µ�throttle��װscroll�Ļص�
const better_scroll = throttle(() => console.log('�����˹����¼�'), 1000)

document.addEventListener('scroll', better_scroll)