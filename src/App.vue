<script setup>
import {h, ref, watch} from "vue";
import {NAutoComplete, NTag, NHr} from "naive-ui";

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

function handleSearch(value) {
  console.log(value)
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
  </div>
</template>
