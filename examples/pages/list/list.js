import CustomPage from '../../utils/page';
CustomPage({
  data: {
    example6Des: `wxml:
  <d-list d-hover-class="d-list-hover-class">
    <text class="d-list-n">导航一</text>
  </d-list>
  <d-list d-hover-class="d-list-hover-class">
    <text class="d-list-n">导航二</text>
  </d-list>
  
  wxss:
  .d-list-hover-class{
    background-color: #D4F2F1;
  }
  .d-list-hover-class .d-list-n{
    color: #00A19C;
  }
  .d-list-hover-class :before{
    color: #00A19C;
  }
  `,
  },
})
