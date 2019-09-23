export default {
  methods: {
    dispatch(componentName, eventName, params) {
      let parent = this.$parent || this.$root;
      let name = parent.$options.name;
      // 通过 while 语句，不断向上遍历更新当前组件（即上下文为当前调用该方法的组件）的父组件实例（变量 parent 即为父组件实例），
      // 直到匹配到定义的 componentName 与某个上级组件的 name 选项一致时，结束循环，并在找到的组件实例上，调用 $emit 方法来触发自定义事件 eventName
      while (parent && (!name || name !== componentName)) {
        parent = parent.$parent;

        if (parent) {
          name = parent.$options.name;
        }
      }
      if (parent) {
        // 在子组件调用 dispatch 方法，向上级指定的组件实例（最近的）上触发自定义事件，并传递数据，且该上级组件已预先通过 $on 监听了这个事件；
        parent.$emit.apply(parent, [eventName].concat(params)); //apply数组形式传参
      }
    },
  }
}
