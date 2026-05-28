export default defineEventHandler(async () => {
  const strapiUrl = useRuntimeConfig().public.strapiUrl
  const start = Date.now()

  try {
    await $fetch(`${strapiUrl}/api/pages?pagination[pageSize]=1`, {
      timeout: 9000,
    })
    return { ok: true, ms: Date.now() - start, strapiUrl }
  } catch (e: any) {
    return { ok: false, ms: Date.now() - start, strapiUrl, error: e?.message }
  }
})
