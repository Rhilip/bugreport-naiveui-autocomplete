<script setup>
import {h, ref, watch} from "vue";
import {NAutoComplete, NTag, NHr, NSpace, NText} from "naive-ui";


function handleSearch(value) {
  console.log(value)
}

const valueRef1 = ref('')
const optionsRef1 = ref([])

watch(valueRef1, () => {
  setTimeout(() => {   // 模拟异步加载
    optionsRef1.value = [1,2,3].map((v) => {
      return {
        label: () => h(NTag, null, {default: () => valueRef1.value + v}),
        value: valueRef1.value + v
      }
    })
  }, 1e3)
})

const valueRef2 = ref('')
const optionsRef2 = ref([])
watch(valueRef2, () => {
  setTimeout(() => {
    optionsRef2.value = [1,2,3].map((v) => {
      return {
        label: valueRef2.value + v,
        render: () => h(NTag, null, {default: () => valueRef2.value + v}),
        value: valueRef2.value + v
      }
    })
  }, 1e3)
})

const valueRef3 = ref('')
const optionsRef3 = ref([])

watch(valueRef3, () => {
  setTimeout(() => {   // 模拟异步加载
    optionsRef3.value = ['all','part','some'].map((v) => {
      return {
        label: () => h(NSpace, {justify:'space-between'}, [
            h(NText, null, {default: () => valueRef3.value}),
            h(NTag, null, {default: () => v})
        ]),
        value: `${valueRef3.value}|${v}`
      }
    })
  }, 1e3)
})

function fixValue(value) {
  valueRef3.value = value;
  handleSearch(value);
}

</script>

<template>
  <div style="width: 480px; margin: 10px">
    AutoComplete Which options label is NTag
    <n-auto-complete :options="optionsRef1" v-model:value="valueRef1" @select="handleSearch">
    </n-auto-complete>

    <n-hr />

    AutoComplete Which options use render is NTag
    <n-auto-complete :options="optionsRef2" v-model:value="valueRef2" @select="handleSearch">
    </n-auto-complete>

    <n-hr />
    Current Fixture
    <n-auto-complete :options="optionsRef3" v-model:value="valueRef3" @select="fixValue" clear-after-select>
    </n-auto-complete>
  </div>
</template>

<style>
.n-base-select-option__content {
  width: 100%;
}
</style>
