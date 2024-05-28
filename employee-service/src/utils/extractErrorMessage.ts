function extractErrorMessage(message: string): string {
  const match = message.match(/Invalid `prisma\.employee\.create\(\)` invocation.*?\n\n([\s\S]+?)\n\s+at /);
  if (match && match[1]) {
    return match[1].trim();
  }
  return 'An error occurred while creating the employee.';
}

export default extractErrorMessage