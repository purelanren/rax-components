import fmtEvent from './fmtEvent';

Component({
  data: {
    current: 0,
  },
  properties: {
    className: {
      type: String,
    },
    style: {
      type: String,
    },
    width: {
      type: String,
    },
    height: {
      type: String,
    },
    autoPlay: {
      type: Boolean,
      value: false,
    },
    showsPagination: {
      type: Boolean,
      value: false,
    },
    loop: {
      type: Boolean,
      value: false,
    },
    index: {
      type: Number,
      value: 0,
    },
    autoPlayInterval: {
      type: Number,
      value: 1000,
    },
    paginationStyle: {
      type: Object,
      value: {
        itemColor: 'rgba(255, 255, 255, 0.5)',
        itemSelectedColor: 'rgb(255, 80, 0)',
      },
    },
  },
  attached() {
    this.setData({
      current: this.properties.index,
    });
  },
  methods: {
    onChange(e) {
      const event = fmtEvent(this.properties, e);
      this.triggerEvent('onChange', event);
    },
  },
  slideTo(index) {
    if (index !== undefined) {
      this.setData({
        current: index,
      });
    }
  },
});
