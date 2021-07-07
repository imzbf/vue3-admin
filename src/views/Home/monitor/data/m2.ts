const option = {
  series: [
    {
      type: 'gauge',
      anchor: {
        show: true,
        showAbove: true,
        size: 16,
        itemStyle: {
          color: '#FAC858'
        }
      },
      pointer: {
        icon: 'path://M2.9,0.7L2.9,0.7c1.4,0,2.6,1.2,2.6,2.6v115c0,1.4-1.2,2.6-2.6,2.6l0,0c-1.4,0-2.6-1.2-2.6-2.6V3.3C0.3,1.9,1.4,0.7,2.9,0.7z',
        width: 8,
        length: '80%',
        offsetCenter: [0, '8%']
      },

      progress: {
        show: true,
        overlap: true,
        roundCap: true
      },
      axisLine: {
        roundCap: true
      },
      data: [
        {
          value: 20,
          name: '完成率',
          title: {
            offsetCenter: ['-60%', '90%']
          },
          detail: {
            offsetCenter: ['-60%', '115%']
          }
        },
        {
          value: 40,
          name: '达标率',
          title: {
            offsetCenter: ['0%', '90%']
          },
          detail: {
            offsetCenter: ['0%', '115%']
          }
        },
        {
          value: 60,
          name: '优秀率',
          title: {
            offsetCenter: ['60%', '90%']
          },
          detail: {
            offsetCenter: ['60%', '115%']
          }
        }
      ],
      title: {
        fontSize: 14
      },
      detail: {
        width: 40,
        height: 14,
        fontSize: 14,
        color: '#fff',
        backgroundColor: 'inherit',
        borderRadius: 3,
        formatter: '{value}%'
      }
    }
  ]
};

export default option;
