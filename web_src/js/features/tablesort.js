export default function initTableSort() {
  for (const header of document.querySelectorAll('th[data-sortt-asc]') || []) {
    const sorttAsc = header.getAttribute('sortt-asc');
    const sorttDesc = header.getAttribute('sortt-desc');
    const sorttDefault = header.getAttribute('sortt-default');
    header.addEventListener('click', () => {
      tableSort(sorttAsc, sorttDesc, sorttDefault);
    });
  }
}

function tableSort(normSort, revSort, isDefault) {
  if (!normSort) return false;
  if (!revSort) revSort = '';

  const url = new URL(window.location);
  let urlSort = url.searchParams.get('sort');
  if (!urlSort && isDefault) urlSort = normSort;

  url.searchParams.set('sort', urlSort !== normSort ? normSort : revSort);
  window.location.replace(url.href);
}
