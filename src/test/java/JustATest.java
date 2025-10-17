import org.junit.Test;

import com.keytiles.api.model.common.metadata.v1.MetaData;
import com.keytiles.api.model.common.types.v3.ContainerQueryRangeResponseV3Class;

public class JustATest {

	@Test
	public void modelTest() {
		ContainerQueryRangeResponseV3Class response = null;

		MetaData meta = new MetaData(null, "title", 1);
		meta.description = null;
	}
}
