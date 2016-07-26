block('timestamp').content()((_, json) =>
  (json.template || 'Last edit: %%').replace('%%',
    new Date().toISOString().slice(0, 10).split('-').reverse().join('.')))
