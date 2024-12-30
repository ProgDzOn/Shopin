// تحديث الوقت والتاريخ
function updateDateTime() {
    const now = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const timeString = now.toLocaleTimeString('ar-SA');
    const dateString = now.toLocaleDateString('ar-SA', options);
    document.getElementById('date-time').textContent = `${dateString} - ${timeString}`;
}

// استدعاء دالة الوقت كل ثانية
setInterval(updateDateTime, 1000);
updateDateTime();


    // تعطيل النقر بزر الماوس الأيمن
    document.addEventListener('contextmenu', function(e) {
        e.preventDefault();
    });

    // تعطيل التحديد
    document.onselectstart = function () {
        return false;
    };

    // تعطيل اختصارات لوحة المفاتيح مثل Ctrl+C
    document.addEventListener('keydown', function(e) {
        if (e.ctrlKey && (e.key === 'c' || e.key === 'C')) {
            e.preventDefault();
        }
    });

    // تعطيل النقر بزر الماوس الأيمن
    document.addEventListener('contextmenu', function(e) {
        e.preventDefault();
    });

    // تعطيل التحديد
    document.onselectstart = function () {
        return false;
    };

    // تعطيل اختصارات لوحة المفاتيح مثل Ctrl+C
    document.addEventListener('keydown', function(e) {
        if (e.ctrlKey && (e.key === 'c' || e.key === 'C')) {
            e.preventDefault();
        }
    });




