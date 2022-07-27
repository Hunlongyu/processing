export const menuList = {
  file: [
    {
      label: 'Open',
      key: 'open'
    },
    {
      label: 'Open Recent',
      key: 'openRecent'
    },
    {
      label: 'Save',
      key: 'save'
    },
    {
      label: 'Save As',
      key: 'saveAs'
    },
    {
      label: 'Import',
      key: 'import',
      children: [
        {
          label: 'Import From .epr',
          key: 'importFramEpr'
        },
        {
          label: 'Import From .xlsx',
          key: 'importFramXlsx'
        },
        {
          label: 'Import From .txt',
          key: 'importFramTxt'
        }
      ]
    },
    {
      label: 'Export',
      key: 'export'
    },
    {
      label: 'Print',
      key: 'print'
    }
  ],
  edit: [
    {
      label: 'Undo',
      key: 'undo'
    },
    {
      label: 'Redo',
      key: 'redo'
    },
    {
      label: 'Undo All',
      key: 'undoAll'
    }
  ],
  processing: [
    {
      label: 'Baseline',
      key: 'baseline',
      children: [
        {
          label: 'Polynomials',
          key: 'blPolynomials'
        },
        {
          label: 'Splines',
          key: 'blSplines'
        },
        {
          label: 'Exponentials',
          key: 'blExponentials'
        }
      ]
    },
    {
      label: 'Transformation',
      key: 'transformation'
    },
    {
      label: 'SNR',
      key: 'snr'
    },
    {
      label: 'Peak',
      key: 'peak'
    }
  ],
  view: [
    {
      label: 'tool bar',
      key: 'toolbar',
      children: [
        {
          label: 'File',
          key: 'tbFile'
        },
        {
          label: 'Edit',
          key: 'tbEdit'
        },
        {
          label: 'Tool bar',
          key: 'tbToolbar'
        }
      ]
    }
  ],
  preferences: [
    {
      label: 'Options',
      key: 'options'
    },
    {
      label: 'About',
      key: 'about'
    }
  ]
}
