const faqItems = document.querySelectorAll('.faq__list-item');

faqItems.forEach(item => {
  const title = item.querySelector('.title-wrapper');
  const answer = item.querySelector('.list__item-hidden');
  const icon = title.querySelector('img');

  title.addEventListener('click', () => {
    const isOpen = answer.classList.contains('active');

    document.querySelectorAll('.list__item-hidden').forEach(p => p.classList.remove('active'));
    document.querySelectorAll('.faq__list-item img').forEach(i => i.src = 'assets/images/icon-plus.svg');

    if (!isOpen) {
      answer.classList.add('active');
      icon.src = 'assets/images/icon-minus.svg';
    }
  });
});
