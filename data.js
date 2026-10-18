window.STAY = {
  contact: { line: null, phone: null },
  rooms: [
    { id: 'community-suite', name: '社區套房', group: '社區套房', type: '套房', number: '01', bathroom: '獨立衛浴之配置與設備待確認', shared: '社區公共空間與使用規範待確認', photos: [] },
    { id: 'apartment-room-a', name: '公寓雅房 A', group: '公寓房間', type: '雅房', number: '02', bathroom: '衛浴是否共用、共用人數與清潔方式待確認', shared: '公共空間是否共用、範圍與使用規範待確認', photos: [] },
    { id: 'apartment-room-b', name: '公寓雅房 B', group: '公寓房間', type: '雅房', number: '03', bathroom: '衛浴是否共用、共用人數與清潔方式待確認', shared: '公共空間是否共用、範圍與使用規範待確認', photos: [] },
    { id: 'apartment-suite', name: '公寓套房', group: '公寓房間', type: '套房', number: '04', bathroom: '獨立衛浴之配置與設備待確認', shared: '公共空間是否共用、範圍與使用規範待確認', photos: [] }
  ].map(room => ({ rent: '待確認', area: '待確認', status: '待確認', equipment: '待確認', available: '待確認', deposit: '待確認', electricity: '待確認', water: '待確認', management: '待確認', internet: '待確認', term: '待確認', pets: '待確認', smoking: '待確認', ...room }))
};
