<script setup lang="ts"></script>

<template>
  <h1>Getting Spaceships Launches Data Using GraphQL</h1>

  <button @click="refetchQueryLaunches">Refetch</button>
  <p v-show="queryLaunchesLoading">Loading...</p>
  <div v-if="!queryLaunchesLoading && queryLaunchesResult">
    <pre v-for="launch in queryLaunchesResult.launches">
      <span>🚀💫</span>
      {{ launch }}
    </pre>
  </div>
</template>

<script lang="ts" setup>
import { onMounted } from 'vue'
import { QUERY_LAUNCHES } from '../graphql/queries'
import { useLazyQuery } from '@vue/apollo-composable'

// GQP query
const {
  load: loadQueryLaunches,
  refetch: refetchQueryLaunches,
  result: queryLaunchesResult,
  loading: queryLaunchesLoading,
} = useLazyQuery(QUERY_LAUNCHES, {}, { fetchPolicy: 'no-cache' })

onMounted(async () => {
  loadQueryLaunches()
})
</script>
