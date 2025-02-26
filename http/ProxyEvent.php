<?php /* yxorP */

namespace yxorP\Http;

use ArrayAccess;
use ReturnTypeWillChange;

/**
 * @property array $data
 */
class ProxyEvent implements ArrayAccess
{
    private array $data;

    public function __construct($data = array())
    {
        $this->data = $data;
    }

    #[ReturnTypeWillChange] public function offsetSet($offset, $value)
    {

        if (is_null($offset)) {
            $this->data[] = $value;
        } else {
            $this->data[$offset] = $value;
        }
    }

    public function offsetExists($offset): bool
    {
        return isset($this->data[$offset]);
    }

    #[ReturnTypeWillChange] public function offsetUnset($offset)
    {
        unset($this->data[$offset]);
    }

    #[ReturnTypeWillChange] public function offsetGet($offset)
    {
        return $this->data[$offset] ?? null;
    }

}
