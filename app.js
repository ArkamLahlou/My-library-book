// نحدد الحاوية التي ستعرض القائمة
const listContainer = document.getElementById('book-list-container');

// نمر على كل عنصر (كتاب) في مصفوفة الإعدادات bookSettings
bookSettings.forEach(book => {
    // ننشئ عنصر قائمة جديد (<li>)
    const listItem = document.createElement('li');
    
    // نحدد المحتوى: العنوان والوصف
    let content = `<b>${book.title}</b> (${book.details})`;
    
    // إذا كان الكتاب نادراً، نضيف رمزاً إضافياً (تقنية إعدادات إضافية)
    if (book.isRare) {
        content = `✨ ${content}`;
        listItem.style.fontWeight = 'bold';
    }

    // نضع المحتوى داخل العنصر
    listItem.innerHTML = content;
    
    // نضيف العنصر إلى القائمة في صفحة HTML
    listContainer.appendChild(listItem);
});
