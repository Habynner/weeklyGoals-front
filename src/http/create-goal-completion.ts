export async function createGoalCompletion(goalId: string) {
  const res = await fetch('http://localhost:3333/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ goalId }),
  })
  const data = await res.json()

  return data.pendingGoals
}
