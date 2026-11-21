const laptops = [
  {
    name: 'Lenovo ThinkBook 16', brand: 'Lenovo', price: 899,
    cpu: 'Intel Core Ultra 7 255H', ram: '16 GB DDR5', storage: '512 GB SSD', display: '16-inch WUXGA',
    url: 'https://pccircle.com/product/lenovo-think-book-16-ultra-7-255h-16gb-512gb-16',
    student: 92, business: 96, value: 74,
    why: 'Strongest office and iMSM multitasking fit, with 16 GB RAM and a large 16-inch display.'
  },
  {
    name: 'Lenovo IdeaPad Slim 3 15IRH10', brand: 'Lenovo', price: 639,
    cpu: 'Intel Core i7-13620H', ram: '16 GB DDR5', storage: '512 GB NVMe SSD', display: '15.6-inch FHD',
    url: 'https://pccircle.com/product/lenovo-ideapad-slim-3-15irh10',
    student: 96, business: 88, value: 91,
    why: 'Best all-round 16 GB memory option for study, presentations, research, and moderate business work.'
  },
  {
    name: 'Dell Pro 15', brand: 'Dell', price: 479,
    cpu: 'Intel Core i5-1334U', ram: '8 GB DDR5', storage: '512 GB NVMe SSD', display: '15.6-inch FHD, 120 Hz',
    url: 'https://pccircle.com/product/dell-pro-15-intel-core-i5-1334u-8gb-512gb-ssd-15-6-fhd-120hz',
    student: 84, business: 82, value: 96,
    why: 'The lowest-risk budget choice for web study and office work, with a good SSD and efficient processor.'
  },
  {
    name: 'Acer Aspire Lite 15', brand: 'Acer', price: 355,
    cpu: 'Intel Core 3-N350', ram: '8 GB DDR4', storage: '256 GB NVMe SSD', display: '15.6-inch FHD IPS',
    url: 'https://pccircle.com/product/acer-aspire-lite-15-n350-8gb-256gb-ssd-15-6-fhd',
    student: 68, business: 64, value: 100,
    why: 'A low-cost basic computer for document work and online classes; limited for heavy multitasking.'
  }
];

const priorityLabels = { balanced: 'Balanced', student: 'iMSM study', business: 'Business owner', value: 'Lowest price' };

function fiveYearScore(laptop, priority) {
  if (priority === 'balanced') return Math.round(laptop.student * 0.5 + laptop.business * 0.5);
  return laptop[priority];
}

function render() {
  const priority = document.getElementById('priority').value;
  const ranked = [...laptops].sort((a, b) => fiveYearScore(b, priority) - fiveYearScore(a, priority));
  const best = ranked[0];

  document.getElementById('recommendation').innerHTML = `
    <div class="eyebrow" style="color:#fff">Best for ${priorityLabels[priority]}</div>
    <h2>${best.name}</h2>
    <p><strong>${best.price} JOD</strong> · ${fiveYearScore(best, priority)} / 100 five-year fit</p>
    <p>${best.why}</p>`;

  document.getElementById('laptops').innerHTML = ranked.map(laptop => {
    const featured = laptop === best ? ' featured' : '';
    return `<article class="card${featured}">
      <div class="card-head"><h3>${laptop.name}</h3><span class="price">${laptop.price} JOD</span></div>
      <div class="specs">
        <div><span>Processor</span><strong>${laptop.cpu}</strong></div>
        <div><span>Memory</span><strong>${laptop.ram}</strong></div>
        <div><span>Storage</span><strong>${laptop.storage}</strong></div>
        <div><span>Display</span><strong>${laptop.display}</strong></div>
      </div>
      <p class="score">Five-year score: ${fiveYearScore(laptop, priority)} / 100</p>
      <p>${laptop.why}</p>
      <a href="${laptop.url}" target="_blank" rel="noopener noreferrer">View retailer listing ↗</a>
    </article>`;
  }).join('');
}

document.getElementById('compare').addEventListener('click', render);
render();
